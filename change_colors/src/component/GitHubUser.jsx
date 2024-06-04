import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const GitHubUser = () => {

    const[users,setUsers] = useState({});
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(false);
    const[name,setName] = useState('wengangfei');


    const searchUser = async()=>{
        setLoading(true)
        try{
            const resp = await fetch(`https://api.github.com/users/${name}`);
            const data = await resp.json();
        
            setUsers(data);
            setLoading(false);
            setName('')
        }catch(e){
            setError(true)
        }
    }

 
    useEffect(()=>{
       
        searchUser()
        
    },[])
 
console.log(users)

  return (
    <div className='grid place-items-center'>
        <div className='flex my-4'>
            <input type='text' placeholder='Enter name' className='border-2 rounded-md px-2' value={name}
                onChange={(e)=>setName(e.target.value)}/>
            <button className='bg-gray-300 rounded-md py-1 px-2 mx-4' 
                onClick={()=>{
                    searchUser();
                   
                }}>
                Search
            </button>
        </div>

        {   loading && 
            <>
                <h1 className='my-6 text-2xk font-bold text-red-500'>Loading the user ......</h1>
                <ClipLoader
                color='red'
                loading={loading}
                cssOverride={{display: "block",
                            margin: "0 auto",
                            borderColor: "red",}}
                            size={150}
                />
            </>
        }
            

        {
            error  &&
            <>  
                {
                    users.message ?
                    <h1 className='text-red-500 font-bold text-2xl my-6'>This user is not exist......</h1>
                    :
                    <h1 className='text-red-500 font-bold text-2xl my-6'>Something is wrong,Can not loading the user......</h1>
                }
            </>
            
        }

        {
            users.login && 
            <>
                <div className=' my-8 border-2 border-black p-4 w-1/2 text-center rounded-md'>
                    <h1>{ users.name}</h1>
                    <a href={users.url}>URL</a><br />
                    <a href={users.url}>GITHUB</a>
                </div>
               
            </>
            
        }
       
        
    </div>
  )
}

export default GitHubUser