import { useEffect, useState } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import ClipLoader from "react-spinners/ClipLoader";

const Image_scroll = () => {
    const[image,setImage] = useState(null);
    const[index,setIndex] = useState(0);
    const[loading,setLoading] = useState(true);
    const[error, setError] = useState(false)
     

    useEffect(()=>{
        (
            async ()=>{
                try{
                    const resp = await fetch('https://picsum.photos/v2/list?page=1&limit=10');
                    const data = await resp.json();
                    setImage(data.map(item=>item.download_url));
                    setLoading(false);
                }catch(e){
                    setError(true)
                }
            }
        )()       
    },[])



    const forward = (array)=>{
        index < array.length-1 ? setIndex(prev=>prev+1) : setIndex(0);
    }


    const backward = ()=>{
        
        index !== 0 ? setIndex(prev=>prev-1) : setIndex(0);
    }

  return (
    <div className='h-screen flex items-center justify-center'>
        { loading && 
        <div>
            <h1 className='text-3xl my-8'>Loading the images......</h1>
            <ClipLoader
                color='red'
                loading={loading}
                cssOverride={{display:'block',margin:'0 auto',borderColor:'red'}}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
        
        }
        
        {
            image &&
            <div>
                <div className='flex'>
                    <FaArrowAltCircleLeft className='text-2xl cursor-pointer text-red-500 mt-44' onClick={()=>backward()}/>
                    <img className='m-2 rounded-md ' src={image[index]} alt='random name' height={850} width={850}/>
                    <FaArrowAltCircleRight className='text-2xl cursor-pointer text-red-500 mt-44' onClick={()=>forward(image)}/>  
                </div>
                <div className='flex ml-20'>
                    {
                        [...Array(10)].map((_,i)=>{
                            return(
                                <div key={Math.random()}>
                                    <FaCircle className={`cursor-pointer m-3 ${i === index ? 'text-gray-600' : 'text-gray-300'}`} onClick={()=>setIndex(i)}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div> 
        }
        {
            error && <h1 className='text-4xl text-red-500 font-bold my-6'>Opps, Something went wrong!</h1>
        }
        
        
    </div>
  )
}

export default Image_scroll