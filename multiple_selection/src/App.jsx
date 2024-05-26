import { useState } from 'react';
import Card from './Card';
import data from '../jobs.json';


function App() {
  const[mul,setMul] = useState(false);



  return (
    <div className="grid place-items-center p-6">
      <h2 className={`${mul ? 'bg-indigo-500' : 'bg-red-200'} px-2 py-1 cursor-pointer`} onClick={()=>{
        setMul(prev=>!prev)
        }}>
        Enable Multi Selection
      </h2>
      
      <Card data={data} flag={mul}/>
    
      
    </div>
  )
}

export default App
