import { useState, useEffect, useLayoutEffect } from 'react'

const LayOut = () => {
    
    const useIds = [1,2];
    const [admin,setAdmin] = useState(null);
    const[userId,setUserId] = useState(useIds[0]);

    let now = performance.now();
    while((performance.now() - now) < 400){
        //
    }  
    
    console.log(2)
    


    // useEffect(()=>{
    //     console.log(5)
    // },[])



    useEffect(()=>{
        console.log('run layoutEffect before')
        setAdmin(userId === useIds[0])
        console.log('run layoutEffect after')
    },[userId])

 


    


console.log(3)
  return (
    <div className='text-center'>
        <div>
            UserId: {userId}
        </div>
        <div>
            Admin: {admin ? 'true' : 'false'}
        </div>
        <button onClick={()=>{
            console.log('Button clicked.')
            const newId = useIds.find(id=>id !== userId);
            setUserId(newId);
            console.log('Button clicked after')
        }}>
            Change User
        </button>
        { console.log(4) }
    </div>
  )
}

export default LayOut