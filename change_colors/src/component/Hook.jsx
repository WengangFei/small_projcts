import { useEffect, useState, useRef } from "react";
import { default as useDataFetch } from "./HookSub";
import { default as useOutsideClick } from "./OutsideClick";



const Hook = () => {
    let num = 10;
    const[data,error] = useDataFetch(`https://dummyjson.com/products?limit=${num}&select=images,title,price`);
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