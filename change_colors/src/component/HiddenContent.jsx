import { useState, useEffect, useRef } from 'react';



const HiddenContent = () => {

  const[flag,setFlag] = useState(false);
  const con = useRef();

  useEffect(()=>{
   
    function clickOutside(e) {

      if(!con.current || con.current?.contains(e.target)) return
      console.log('trigger')
      setFlag(false)
    }

    document.addEventListener('mousedown',clickOutside);

    return ()=>document.removeEventListener('mousedown',clickOutside)
  },[con])


// console.log(flag)
  return (
    <div className='text-center'>
      HiddenContent

      {
        flag ? 
        <div ref={con} className='text-2xl font-bold my-12 bg-green-100'>
          Click else where to Hide this content
        </div> 
        :
        <div>
          <button className='my-6 py-1 px-2 rounded-md bg-red-300'
          onClick={()=>setFlag(true)}>
            Show Content
          </button>
        </div>
        
      }

      <div>Fei</div>
    </div>
  )
}

export default HiddenContent