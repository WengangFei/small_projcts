import { useRef, useState } from 'react'
import ScrollToCardSub from './ScrollToCardSub'

const ScrollToCard = () => {

    const cards = [
        {
            id:1,
            name:'First Card',
            color:'bg-green-300',
            ref: useRef(null)
        },
        {
            id:2,
            name:'Second Card',
            color:'bg-red-300',
            ref: useRef(null)
        },
        {
            id:3,
            name:'Third Card',
            color:'bg-sky-300',
            ref: useRef(null)
        },
        {
            id:4,
            name:'Fourth Card',
            color:'bg-indigo-300',
            ref: useRef(null)
        },
        {
            id:5,
            name:'Firth Card',
            color:'bg-gray-300',
            ref: useRef(null)
        }
    ]

    const[num,setNum] = useState(0);


  return (
    <div className='text-center m-12'>
        ScrollToCard
        <div className='my-6'>
            <input type='type' placeholder='Enter card number' className='border-2 rounded-md py-1 px-2 mx-6'
            onChange={(e)=>setNum(e.target.value)}/>
            <button className='bg-gray-200 rounded-md py-1 px-2'
            onClick={()=>{
                cards[num-1].ref.current.scrollIntoView({behavior:'smooth'});
            }}
            >
                Switch
            </button>
        </div>

        {
            cards.map(card=>{
               
                return (
                    <div key={card.id}>
                        <ScrollToCardSub 
                        color={card.color}
                        name={card.name}
                        passRef={card.ref}
                        />
                    </div>
                )
            })
        }
        
        
    </div>
  )
}

export default ScrollToCard