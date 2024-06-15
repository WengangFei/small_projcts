
import { useLocation, useNavigate } from 'react-router-dom'



const ShowAllRecipes = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    
    
  return (
    <div className='grid grid-cols-4 gap-4'>
        {
            state ?
            state.map(item=>{
                return (
                    <div key={item.id} className='flex flex-col w-80 overflow-hidden p-2 border-white rounded-lg shadow-xl'>
                        <div className='h-40 flex'>
                            <img src={item.image_url }  width={100} height={100} className='w-full rounded-md block'/>
                        </div>
                        
                      
                        <div className='text-left text-sky-500 mt-2 text-sm font-bold'>{item.publisher}</div>
                        <div className='text-left text-xl font-bold my-2'>{item.title}</div>
                        <button className='bg-black w-full rounded-md text-md px-3 py-2 my-1 text-white'
                            onClick={()=>{
                            
                                navigate(`/single_detail/${item.id}`,{state:item})
                            }}
                        >
                            Check Details
                        </button>
                    </div>
                )
            }):
            <h1>No data.</h1>
        }
    </div>
  )
}

export default ShowAllRecipes