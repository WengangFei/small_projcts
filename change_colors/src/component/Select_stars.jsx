import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Select_stars = () => {
   
const[number,setNumber] = useState(0);

console.log(number)
  return (
    <div className="flex">
        Select_stars
        {
        [...Array(10)].map((_,index)=>{
                index += 1;
                return(
                    <div key={index}>
                        <FaStar  className={`text-5xl ${
                            index <= number ? 'text-yellow-400' : null
                        }`} 
                        // onMouseMove={()=>setNumber(index)}
                        // onMouseLeave={()=>setNumber(index)}
                        onClick={()=>setNumber(index)}
                        />
        
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default Select_stars