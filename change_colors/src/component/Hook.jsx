import { useEffect, useState, useRef } from "react";
import { default as useDataFetch } from "./HookSub";
import ClipLoader from "react-spinners/ClipLoader";


const Hook = () => {
    const[num,setNum] = useState(10);
    const[data,setData] = useState([]);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(false);
    const[showImage,setShowImage] = useState(false);
    const image = useRef(null);
    const input = useRef(null);
    const[change,setChange] = useState(0);
    


   

    useEffect(()=>{
        
        (async()=>{
            try{
                const resp = await fetch(`https://dummyjson.com/products?limit=${num}&select=images,title,price`);
                const rawData = await resp.json();
                setLoading(false);
                setData(rawData.products);
            }catch(e){
                setError(true);
            }
            
        })()
       
        input.current.focus();

    },[num])

    useEffect(()=>{

        const clickOutside = (e)=>{
            
            if(!image.current || image.current.contains(e.target)) return
           
            setShowImage(false);
        }


        document.addEventListener('mousedown',clickOutside);
        

        return ()=>document.removeEventListener('mousedown',clickOutside);
    },[image])


  
   
  return (

    <div className='text-center'>


        {
            error ?
                <>
                    <h1 className="text-4xl font-bold text-red-500">
                        Opps, Can not loading all products ......
                    </h1>
                </>:
                <>
                    <input type='text' placeholder="Change the loading products units" ref={input}
                    onChange={(e)=>setChange(e.target.value)} className="border-2 py-1 px-2 rounded-md mx-4 my-6"/>
                    <button onClick={()=>setNum(change)} className="bg-indigo-400 px-2 py-1 rounded-md text-white">
                        Change
                    </button>
                    {
                    loading ? 
                    <>
                        <h1 className="text-4xl font-bold">Loading all products ......</h1>
                        <ClipLoader
                            loading={loading}
                            cssOverride={{display:'block',margin:'0 auto',borderColor:'red'}}
                            size={150}
                        />
                    </> :
                    <>
                        {
                            data.map(product=>{
                                return (
                                    <div key={product.id}>
                                        { product.title }
                                    </div>
                                )
                            })
                        }
                        <h1 className="text-2xl font-bold my-6">Show random product image</h1>
                        {
                            !showImage ?
                            <>
                                <button className="bg-green-400 rounded-md text-white ly-1 px-2"
                                    onClick={()=>setShowImage(true)}
                                >
                                    Show
                                </button>
                            </> :
                            <>
                            <div className='flex items-center justify-center'>
                                <img ref={image} src={data[Math.floor(Math.random() * data.length)].images[0]}
                                alt='product' height={250} width={250} />
                            </div>
                               
                            </>
                        }
                        
                    </>
                    }
                </>
        }
    </div>
  )
}

export default Hook