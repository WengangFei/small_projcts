import { useEffect, useState } from 'react'

const GetAllUsers = () => {

    const[data,setData] = useState([]);
    const[user,setUser] = useState('');
    const[inputValue,setInputValue] = useState('');
  
    

    useEffect(()=>{
        (
        
            async ()=>{
                try{
                    const resp = await fetch('http://dummyjson.com/users?limit=50');
                    const data = await resp.json();
                    setData(data.users.map(user=>user.firstName));
                }catch(e){
                    console.log(e)
                }
            }
        )()
        
    },[])

    const result = data.map(name=>name.includes(user) ? name : null).filter(name=>name != null);
    

  return (
    <div className='grid place-items-center'>
        GetAllUsers
        <input type='text' className='border-2 rounded-md py-1 px-2 my-6' 
            placeholder='Search user name.' 
            value={ inputValue || user }
            onChange={(e)=>{
                const item = e.target.value;
                const upperName = item ? item[0]?.toUpperCase() + item?.slice(1) : '';
                setUser(upperName);
                setInputValue('')
                }
                
            }
        />
        <div>
          
                { user && result.length ? 
                    (result.map((name,i)=>{
                        
                
                    return(
                        <div key={i} onClick={()=>{
                            setInputValue(name)
                            setUser('')
                                }
                            } className='cursor-pointer'>
                            { name }
                        </div>
                        )
                    }))
                
                : 
                    <h1 className='text-red-500 font-bol'> { result.length === 50 ? '' : 'No users are available!'}</h1>
                }
            
        </div>
     

    </div>
  )
}

export default GetAllUsers