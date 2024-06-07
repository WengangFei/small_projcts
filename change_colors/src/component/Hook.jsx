import { useEffect, useState } from "react";
import { default as useDataFetch } from "./HookSub";


const Hook = () => {
    const[num,setNum] = useState(50)
    const[data,setData] = useDataFetch(`https://dummyjson.com/products?limit=${num}&select=images,title,price`);
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
        if(data) { setLoading(false) }
    },[data])
    console.log(loading)
  return (

    <div className='text-center'>
        
    </div>
  )
}

export default Hook