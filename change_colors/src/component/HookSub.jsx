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
                    setData(rawData)
                }catch(e){
                    console.log(e)
                }
            }
            
        )()
    },[url,setData])

 return [data,setData]
}

export default HookSub