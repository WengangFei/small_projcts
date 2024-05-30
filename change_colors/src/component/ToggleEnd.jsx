import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from 'react';
import ToggleSub from "./ToggleSub";

const ToggleEnd = ({ data }) => {
    
const[flag,setFlag] = useState({});

const fun = (arg)=>{
    setFlag({
        ...flag,
        [arg]:!flag[arg]
    });
}
console.log(flag)
    
  return (
    <div>
        {
            data && 
            data.map((item,i)=>{
                return (
                    <div key={i} className="my-4">
                        {
                            !item.children ? item.label :
                            <div className="flex">
                                { item.label }
                                <span onClick={()=>fun(item.label)}>
                                    {   
                                        flag[item.label] ? 
                                        <FaMinus className="ml-2 mt-1 cursor-pointer"/>:
                                        <FaPlus className="ml-2 mt-1 cursor-pointer"/> 
                                    }  
                                </span>
                                
                            </div>
                        
                        }
                        { flag[item.label] && <ToggleSub data={item.children}/> }
                      
                    </div>
                )
            })
        }
    </div>
  )
}

export default ToggleEnd