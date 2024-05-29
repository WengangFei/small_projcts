import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from 'react';


const Toggle = () => {

const [profile,setProfile] = useState(false);
const [detail,setDetail] = useState(false);
const [location,setLocation] = useState(false);



  return (
    <div className='grid grid-cols-5 h-screen text-white text-xl'>

        <div className='bg-sky-600'>
            <div className='mx-4 my-6'>
                Home
            </div>
            
            <div className='mx-4 my-6'>
                <div className="flex">
                    Profile
                    { !profile && <FaPlus className="ml-6  mt-1 cursor-pointer" onClick={()=>setProfile(true)}/>}
                    <div>
                        { profile &&
                            <>
                                <FaMinus className="ml-6  mt-1 cursor-pointer" onClick={()=>setProfile(false)}/>
                                <div className="py-4 flex">
                                    Details
                                    { !detail && <FaPlus className="ml-6  mt-1 cursor-pointer" onClick={()=>setDetail(true)}/> }
                                    <div>
                                        { detail &&
                                            <>
                                                <FaMinus className="ml-6  mt-1 cursor-pointer" onClick={()=>setDetail(false)}/>
                                                <div className="py-4 flex">
                                                    Location
                                                    { !location && <FaPlus className="ml-6  mt-1 cursor-pointer" onClick={()=>setLocation(true)}/> }
                                                        <div>
                                                            { location &&
                                                            <>
                                                                <FaMinus className="ml-6  mt-1 cursor-pointer" onClick={()=>setLocation(false)}/>
                                                                <div className="mt-6">
                                                                    City
                                                                </div>
                                                            </>
                                                    }  
                                                        </div> 
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </>
                        }   
                    </div>
                </div>
                
            </div>
            <div className='mx-4 my-6'>
                <div className="flex">
                    Settings
                    <div>
                        <FaPlus className="ml-6 mt-1 cursor-pointer"/>
                        <div className="py-4 flex">
                            Account
                            <FaMinus className="ml-6  mt-1 cursor-pointer"/>
                        </div>
                    </div>
                   
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Toggle