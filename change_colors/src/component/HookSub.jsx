import { useState } from "react"
import { useEffect } from "react"


const  HookSub = (url) => {

    const[data,setData] = useState(null);


    useEffect(()=>{
        (
            async ()=>{
                try{
                    const resp = await fetch(url);
                    const rawData = await resp.json();
                    setData(rawData.products)
                }catch(e){
                    console.log(e);
                    setError(true)
                }
            }
            
        )()
    },[url])

 return [data,error]
}

export default HookSub