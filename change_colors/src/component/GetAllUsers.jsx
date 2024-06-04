import { useEffect, useState } from 'react'

const GetAllUsers = () => {

    const[data,setData] = useState([]);
    const[user,setUser] = useState('');
    const[inputValue,setInputValue] = useState('');

    useEffect(()=>{
        (
        
            async ()=>{
                try{
                    const resp = await fetch('http://dummyjson.com/users?limit=100');
                    const data = await resp.json();
                    setData(data.users.map(user=>user.firstName));
                }catch(e){
                    console.log(e)
                }
            }
        )()
    },[])

    console.log(data)

  return (
    <div className='grid place-items-center'>
        GetAllUsers
        <input type='text' className='border-2 rounded-md py-1 px-2 my-6' 
            placeholder='Enter user name' 
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
            { 
                user && 
                data.map((name,i)=>{
                    if(name.includes(user)){
                        return(
                            <div key={i} onClick={()=>{
                                setInputValue(name)
                                setUser('')
                                }
                            } className='cursor-pointer'>
                                { name }
                            </div>
                        )
                    }
                })
            }
        </div>
    </div>
  )
}

export default GetAllUsers