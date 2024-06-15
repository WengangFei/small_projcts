import { useLocation } from "react-router-dom";
import { useContext, useState } from 'react';
import { DataContext } from "./GlobalContext";



const SingleDetail = () => {

    const { state } = useLocation();
    
    const{favorites,setFavorites} = useContext(DataContext);
  
 
    
 console.log(status)
  return (
    <div className="flex justify-normal p-10">
        <div>
            <img src={state?.image_url} className="rounded-md" height={850} width={850}/>
        </div>
        <div className="ml-12 text-left">
            <button className="bg-black py-2 px-4 rounded-md w-full text-white"
            onClick={()=>{
                // JSON.parse(localStorage.getItem(state.id)) ? 
                // localStorage.removeItem(state.id):
                // localStorage.setItem(state.id,JSON.stringify(state));

                favorites.length !== 0 ? 

                favorites.find((item,index)=>
                    
                    item.id === state.id ?
                    setFavorites([...favorites.splice(0,index),...favorites.slice(index+1)]) 
                    :
                    setFavorites([...favorites,state])
            ) 
            : setFavorites([state]);
       
  
            }}>
              { favorites.find(item=>item.id === state.id) ? 'Remove it from Favorites':'Add to Favorites'}
            </button>
            <p>{state?.publisher}</p>
            <p>{state?.title}</p>
            <p>{state?.id}</p>
        </div>
        
    </div>
  )
}

export { SingleDetail as default }
