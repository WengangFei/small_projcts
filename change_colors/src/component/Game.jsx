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
// winner pattern. This is a smart design.
    const winnerPattern = [
        [0,1,2],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
    ]

// this function is decide who is the winner.

    const result = winnerPattern.filter(item=>{
        return item.every(num=>{
            const image = content[item[0]].shape;
            return image ? content[num].shape === image : null;
        } )
    })

    const[changeImage,setChangeImage] = useState('X');
    const[over,setOver] = useState(false);
  
  return (
    <div className='grid place-content-center'>
        <div className='ml-14 mt-6'>
            Game for fun
        </div>
        
        <div className='grid h-60 w-60 grid-cols-3 my-12'>
            {
                content.map((item,i)=>{

                    return (
                        <button key={i} onClick={()=>{
                            
                            //if the single square is empty,click it to place the image,
                            //if the single square has image showing, click is dysfunctional
                             if(!content[i].shape){
                                setContent(
                                    [
                                        ...content.slice(0,i),
                                        {id:i,shape:changeImage},
                                        ...content.slice(i+1)
                                    ]
                                )
    
                                setChangeImage(prev=> prev=='O' ? 'X' : 'O');
                                // //if the board is full, game is finished.
                                content.filter(item=>item.shape).length === 8 ? setOver(true) : null
                               
                             } else return     
                        }} 
                        className='cursor-pointer'
                        // result is winner combo pattern array, once the length is greater than 0, the winner occurs and 
                        //will disable the button clicking.
                        disabled={over || result.length > 0}
                        >
                            <GameSquare item={item}/>
                        </button>
                    )
                })
            }

        </div>
        <h1 className='ml-14 my-2 text-3xl'>
            { result.length > 0 ? 
            `${content[result[0][0]].shape === 'X' ? 'O' : 'X'} is the winner.` : 
            (over ? 'Game is over.' : `${ changeImage === 'O' ? 'X\'s turn' : 'O\'s turn'  } `)}
        </h1>
        <button className='bg-red-200 py-1 px-2 rounded-md w-fit ml-14 my-2'
            onClick={()=>window.location.reload()}
        >
            Restart the game
        </button>
        
    </div>
  )
}

export default Game