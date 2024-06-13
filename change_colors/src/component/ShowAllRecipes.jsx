import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ShowAllRecipes = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    
  return (
    <div className='grid grid-cols-4 gap-4'>
        {
            state.map(item=>{
                return (
                    <div key={item.id} className='shadow-2xl rounded-md bg-gray-200 p-4'>
                        <div className='h-62 w-64'>
                             <img src={item.image_url }  width={100} height={100} className='w-full rounded-md'/>
                        </div>
                        <div className='text-left text-sky-500 mt-2 text-sm font-bold'>{item.publisher}</div>
                        <div className='text-left text-xl font-bold my-2'>{item.title}</div>
                        <button className='bg-black w-full rounded-md text-md px-3 py-2 my-1 text-white'
                            onClick={()=>{
                                navigate('/single_detail',{state:item})
                            }}
                        >
                            Check Details
                        </button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ShowAllRecipes