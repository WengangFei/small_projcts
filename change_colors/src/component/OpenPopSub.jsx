
import { IoCloseSharp } from "react-icons/io5";

const OpenPopSub = ({state}) => {
  return (
    <div className='bg-lime-400 h-screen grid place-items-center'>
     
        <div className='bg-green-400 w-9/12 rounded-md h-1/2'>
        <IoCloseSharp className='float-right m-2 cursor-pointer text-white' onClick={()=>state(prev=>!prev)}/>
            <div className='h-1/5 text-white text-4xl font-bold'>
                Header

            </div>
           
            <div className='bg-white h-3/5 text-4xl font-bold'>
                Body
            </div>
            <div className='h-1/5 text-white text-4xl font-bold'>
                footer
            </div>
        </div>
    </div>
  )
}

export default OpenPopSub