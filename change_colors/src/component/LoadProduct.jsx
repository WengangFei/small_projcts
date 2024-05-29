import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const LoadProduct = () => {

    const[error,setError] = useState(false);
    const[loading,setLoading] = useState(true);
    const[product, setProducts] = useState(null);
    const[page,setPage] = useState(10);
    const[disableButton, setDisableButton] = useState(false);

    useEffect(()=>{
        (
            async ()=>{

                try{
                    const resp = await fetch(`https://dummyjson.com/products?limit=${page}&select=images,title,price`);
                    const data = await resp.json();
                    setProducts(data.products);
                    setLoading(false);
                    
                }catch(error){
                    setError(true)
                }
            }
            
        )()
        
    },[page])


  return (
    <div className='text-center'>
        LoadProduct
        {
            loading && 
            <div>
                <h1 className='text-2xl py-6 font-bold'>Loading all products ......</h1>
                <ClipLoader
                    loading={loading}
                    cssOverride={{display:'block',margin:'0 auto',borderColor:'red'}}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        }

        <div className='grid grid-cols-5 gap-6'>
            {
                product && 
                <>
                    {

                    product.map(item=>{
                        return(
                            <div key={item.id} >
                                <div className='text-center'>
                                    <img src={item.images[0]} alt='product_name' height={250} width={250}
                                    className='border-2 rounded-md'
                                    />
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
                                </div>
                            
                            </div>
                        )})
                    }
                    <button className={`${page< 50 ? 'bg-gray-300' : 'bg-red-400'} text-white rounded-md my-4 w-fit py-1 px-2 col-start-3 col-end-4 ${page < 50 ? 'hover:bg-indigo-500' : 'bg-red-400'}`}
                    onClick={()=>{
                        page < 50 ? setPage(pre=>pre+10) : setDisableButton(true)
                        }}
                        disabled = {disableButton}
                        >
                        { page < 50 ? 'Load More products' : 'Reached 50 Max Product' }
                    </button>
                </>  
            } 
       
        </div>

        
      
        {
            error && <h1 className='text-red-500 text-2xl font-bold my-6'>Opps! Something went wrong!</h1>
        }
       
    </div>
  )
}

export default LoadProduct