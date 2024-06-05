import { useState } from 'react';
import GameSquare from './GameSquare';

const Game = () => {

    const [content,setContent] = useState([
        { id: 0},
        { id: 1},
        { id: 2},
        { id: 3},
        { id: 4},
        { id: 5},
        { id: 6},
        { id: 7},
        { id: 8}
    ]);

   const[changeImage,setChangeImage] = useState('X');
    const[over,setOver] = useState(false);
  
// console.log(over)
  return (
    <div className='grid place-content-center'>
        <div className='ml-14 mt-6'>
            Game for fun
        </div>
        
        <div className='grid h-60 w-60 grid-cols-3 my-20'>
            {
                content.map((item,i)=>{

                    return (
                        <button key={i} onClick={()=>{
                             if(!content[i].shape){
                                setContent(
                                    [
                                        ...content.slice(0,i),
                                        {id:i,shape:changeImage},
                                        ...content.slice(i+1)
                                    ]
                                )
    
                                setChangeImage(prev=> prev=='O' ? 'X' : 'O');
                                content.filter(item=>item.shape).length === 8 ? setOver(true) : null
                             }
                             
                             
                            
                             
                }
                    
                        } 
                        className='cursor-pointer'
                        disabled={over}
                        >
                            <GameSquare item={item}/>
                        </button>
                    )
                })
            }

        </div>
        <h1>{ over ? 'Game is over,Please restart it.' : `Current player is ${ changeImage }`}</h1>
        <button className='bg-red-200 py-1 px-2 rounded-md w-fit ml-14'>
            Restart the game
        </button>
        
    </div>
  )
}

export default Game