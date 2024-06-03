import { useState } from 'react'
import OpenPopSub from './OpenPopSub';

const OpenPup = () => {

  const[open,setOpen] = useState(true);


  return (
    <div className='text-center'>
      <div className=''>
        {
          open ? 
          <button className='bg-purple-300 rounded-md py-1 px-2 my-2' onClick={()=>setOpen(false)}>
            Open pop
          </button> :
          <OpenPopSub state={setOpen}/>
        }
      </div>
      
      
    </div>
  )
}

export default OpenPup