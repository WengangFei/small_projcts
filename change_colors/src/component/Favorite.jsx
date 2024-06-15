import { useContext } from "react"
import { DataContext } from "./GlobalContext"
import { useNavigate } from "react-router-dom";



const Favorite = () => {

  const{favorites} = useContext(DataContext);
  const navigate = useNavigate();

  

  return (
    <div className='grid grid-cols-4 gap-4'>
        {
          favorites.length !== 0 ?
            favorites.map(item=>{
                return (
                    <div key={item.id} className='shadow-2xl rounded-md bg-gray-200 p-4'>
                        <div className='h-62 w-64'>
                             <img src={item.image_url }  width={100} height={100} className='w-full rounded-md'/>
                        </div>
                        <div className='text-left text-sky-500 mt-2 text-sm font-bold'>{item.publisher}</div>
                        <div className='text-left text-xl font-bold my-2'>{item.title}</div>
                        <button onClick={()=>{
                            
                            navigate(`/single_detail/${item.id}`,{state:item})
                        }}
                         className='bg-black w-full rounded-md text-md px-3 py-2 my-1 text-white'>
                            Check Details
                        </button>
                    </div>
                )
            }) :
            <h1 className="text-red-600 font-bold ">Your Favorites is empty.</h1>
        }
    </div>
  )
}

export default Favorite