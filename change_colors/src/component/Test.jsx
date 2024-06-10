import { useState,useRef, useEffect } from "react"
import TestPopUp from "./TestPopUp";


const Test = () => {

    const[num,setNum] = useState(0)
    const divRef = useRef(null);
    function f(){}
    

    useEffect(()=>{
        // console.log(divRef.current.className)
        console.log(f)

    },[f])

console.log(1)
   
  return (
    <div ref={divRef} className="fuckDiv">
        my div
        <button onClick={()=>setNum(num+1)} className="bg-red-300 py-1 px-2 rounded-md">Increment</button>
    </div>
  )

//     const[count,setCount] = useState(0);
//     const countRef = useRef(0);
//     let fei = 0;

//     console.log(countRef)

//     const handleFun = ()=>{
//         setCount(prev=>++prev);
//         countRef.current++;

//         console.log('State:' + count);
//         console.log('Ref:' + countRef.current);
//         console.log('fei:' + ++fei);
//     }
//   return (
//     <div className="text-center">
//         <div className="my-4">
//             {count}

//         </div>
      

        // <button onClick={} className="bg-red-300 py-1 px-2 rounded-md">Increment</button>
//     </div>
//   )
}

export default Test