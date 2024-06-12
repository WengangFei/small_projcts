import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const Scroll = () => {

    const[data,setData] = useState([]);
    const[error,setError] = useState(false);
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
        
        (async()=>{
            try{
                const resp = await fetch('https://dummyjson.com/products/?limit=50');
                const rawData = await resp.json();
                setData(rawData.products);
                setLoading(false);
            }catch(e){
                setLoading(false)
                setError(true)
            }
        })()
       
    },[])

    function handleScrollBottom() {
        window.scroll({
          top: document.body.offsetHeight,
          left: 0, 
          behavior: 'smooth',
        });
        console.log('to bottom')
      }

    function handleScrollTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
          console.log('to top')
    }




    
  return (
    <div className='text-center'>
        <h1 className='text-3xl font-bold my-8'>Show all products</h1>
      
        {
            loading ?
            <>
               <h1>Loading all products, Please wait......</h1>
               <ClipLoader
                    
                    loading={loading}
                    cssOverride={{display:'block',margin:'0 auto',borderColor:'red'}}
                    size={150}
                />
            </>
            :
            <>
                {
                    error ?
                    <>
                        <h1>Opps, Can not loading all products......</h1>
                    </>
                    :
                    <>
                        <button className='bg-gray-300 py-1 px-2 rounded-md my-4'
                        onClick={handleScrollBottom}
                        >
                            Scroll Down
                        </button>
                        {
                            data.map(item=>{
                                return(
                                    <div key={item.id}>
                                        { item.title }
                                    </div>
                                )
                            })
                        }
                         <button className='bg-gray-300 py-1 px-2 rounded-md my-4'
                         onClick={handleScrollTop}
                         >
                            Scroll Up
                        </button>
                    </>
                }
            </>
        }
    </div>
  )
}

export default Scroll