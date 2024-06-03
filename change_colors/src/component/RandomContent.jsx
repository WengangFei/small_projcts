import React, { useState } from 'react'

const RandomContent = () => {

  const content = [
    {
      tab: 'content from tab1',
      color: 'bg-red-300',
      name: 'tab1'
    },
    {
      tab: 'content from tab2',
      color: 'bg-green-300',
      name: 'tab2'
    },
    {
      tab: 'content from tab3',
      color: 'bg-purple-300',
      name: 'tab3'
    }
  ];

  const[data,setData] = useState('Click tabs to show contents')

  return (
    <div className='text-center'>
      {
        content.map(tab=>{
          return (
            <span key={tab.name}>
              <button className={`${tab.color} rounded-md m-2 px-2 py-1`} onClick={()=>setData(tab.tab)}>
                { tab.name }
              </button>
            </span>
            
          )
        })
      }
      
      
      
      <div className='text-2xl font-bold my-4'>
        { data }
      </div>
    </div>
  )
}

export default RandomContent