import { useState } from 'react';
import data from '../../color.json';




const Change_color = () => {

  const [color, setColor] = useState('bg-orange-500');
  const [colorType, setColorType] = useState(false);

  const flag = (arg)=>{
    if(arg){
      const hexArray = data[0].map(colorCode=>colorCode.name);
      const index = Math.floor(Math.random() * hexArray.length);
      return hexArray[index]
    }
    else{
      const rgbArray= data[1].map(colorCode=>colorCode.name);
      const index = Math.floor(Math.random() * rgbArray.length);
      return rgbArray[index]
    }
  }
 
console.log(color)



  return (
    <div className={`grid place-items-center h-screen ${color}`}>
      <div className='flex'>
        
        <button onClick={()=>{
          setColorType(true)
        }} className={`${colorType ? 'bg-white' : 'bg-red-200'} m-1 p-2`}>
          Create HEX color
        </button>
        
        
        <button onClick={()=>{
          setColorType(false)
        }} className={`${!colorType ? 'bg-white' : 'bg-indigo-200'} m-1 p-2`}>
          Create GRB color
        </button>
        
        <button className='bg-green-200 m-1 p-2'
        onClick={()=>{setColor(flag(colorType))}}
        >
          Generate Random Color
        </button>
      </div>
     

      <h2 className='text-3xl text-black font-bold'>
        { colorType ? "HEX Color" : "RGB Color" }
      </h2>
      <h1 className='text-3xl text-black font-bold'>{ color }</h1>
    </div>
  )
}

export default Change_color