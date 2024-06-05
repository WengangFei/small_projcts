

import { IoCloseSharp } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";

const GameSquare = ({ item }) => {

    // console.log(item)
  return (
    <div className='bg-gray-200 h-20 w-20 border border-slate-600 flex flex-row justify-center items-center ' >
        {  item.shape && (item.shape === 'O' ? <IoCloseSharp className="square"/>: <FaRegCircle />)}
    </div>
  )
}

export default GameSquare