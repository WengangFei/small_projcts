import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const ScrollDown = () => {

    const[products,setProducts] = useState([]);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(false);
    const[percentageBar,setPercentageBar] = useState(0);


    useEffect(()=>{
        (async()=>{
            try{
                const resp = await fetch('https://dummyjson.com/products/?limit=100');
                const data = await resp.json();
                setProducts(data);
                setLoading(false);
            }catch(e){
                console.log(e);
                setError(true);
            }
            
        })()
    },[])

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            // console.log(
            //     document.body.scrollTop,
            //     document.documentElement.scrollTop,
            //     document.documentElement.scrollHeight,
            //     document.documentElement.clientHeight,
               
            // )
            setPercentageBar( 
               ((document.body.scrollTop || document.documentElement.scrollTop)
                /
                (document.documentElement.scrollHeight -
                document.documentElement.clientHeight)
            )) * 100
        })

        return ()=>{
            window.removeEventListener('scroll',()=>{})
        }
    },[])


 console.log(percentageBar)

  return (
    <div className='text-center'>
        <div className='sticky top-0'>
            <h2 className='text-3xl font-bold p-3 bg-red-300'>Products</h2>
            <div className='bg-indigo-500 min-h-4'></div>
            <div className='bg-green-500 min-h-4 relative -top-4' style={{width:`${Math.floor(document.documentElement.scrollTop)}px`}}></div>
        </div>
        
        {
            products.products?.length > 0 ? 
            <>
                {
                    products.products.map(product=>{
                        return(
                            <div key={product.id}>
                                { product.title }
                            </div>
                        )
                    })
                }
            </> :
            <div>
                <h1 className='text-2xl font-bold text-red-500 mb-6'>Loading the products ......</h1>
                <ClipLoader
                    color= 'red-300'
                    loading={loading}
                    cssOverride={{display:'block',margin:'0 auto',borderColor:'red'}}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
            />
            </div>
            
        }
        {
            error && 
            <div className='mt-6 text-red-500 font-bold text-3xl '>
                Opps! Something is wrong.
            </div>
        }
    </div>
  )
}

export default ScrollDown