import { useState } from 'react'

const ChangeTheme = () => {
    const[change,setChange] = useState(false);
    console.log(localStorage)

  return (
    <div className={`h-screen ${change ? 'bg-black' : 'bg-white'}`}>
        <div className='py-44 pl-36'>
            <span className='text-3xl text-gray-200'>ChangeTheme</span>
            <div>
                <button className={`${change ? 'bg-white' : 'bg-black'} py-1 px-2 rounded-md my-6 text-gray-300`} onClick={()=>setChange(prev=>!prev)}>
                    Change
                </button>  
            </div>
        </div>

        
        
    </div>
  )
}

export default ChangeTheme