import { useEffect, useState } from 'react'

const useLocalStorage = (key,defaultValue) => {

    const[value,setValue] = useState(()=>{
        let currentValue;
        try{
            currentValue = localStorage.getItem(key) || String(defaultValue);
        }catch(e){
            console.log(e);
            setValue(defaultValue);
        }
        return currentValue;
    })

    useEffect(()=>{
      localStorage.setItem(key,value);
        
    },[key,value])
    
    return [value,setValue]


}

export default useLocalStorage