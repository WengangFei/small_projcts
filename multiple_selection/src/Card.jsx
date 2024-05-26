import { CiSquarePlus } from "react-icons/ci";
import { useState } from 'react';

const Card = ({ data,flag }) => {
    const[id,setId] = useState(null);
    const[array,setArray] = useState([]);

   
    const newArray = (array,id)=>{
        array.splice(array.indexOf(id),1)
    }
  return (
    <div>

        {
            data.map(job=>{
            return (
                <div key={job.id} className='bg-red-200 m-2 p-2'>
                <div className="flex">
                    <h3 >{job.title}</h3>
                    <CiSquarePlus className="m-1 flex-1" onClick={()=>{
                        !flag ?
                        setId(job.id) :
                        array.includes(job.id) ?
                        (newArray(array,job.id),
                        setArray([...array]))
                       :
                        setArray([...array,job.id])
                      
                    }}/>
                </div>
                { !flag ?
                    id === job.id && <div>{job.type}</div> :
                    flag && array.includes(job.id) && <div>{job.type}</div>
    
                }
           
                </div>
            )
            })
        }
  </div>
  )
}

export default Card 