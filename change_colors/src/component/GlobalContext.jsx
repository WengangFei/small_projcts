import { createContext, useState, useEffect } from 'react';



export const DataContext = createContext(null);

export default function GlobalContext({children}) {

  const[favorites,setFavorites] = useState([]);
  const[recipe,setRecipe] = useState('');
  const[data,setData] = useState();


  useEffect(()=>{
    (
        async ()=>{
            try{
                const resp = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipe}`);
                const data = await resp.json();
                setData(data.data.recipes);
                //navigate to all recipe page and send the data to it as well.
                
            }catch(e){
                console.log(e)
            }
        }
    )()
    
},[recipe])


// console.log(data)
  return (
    //all global variables are provided in value prop.
    <DataContext.Provider 
    value={{
      favorites,
      setFavorites,
      setRecipe,
      data
    }}>
      { children }
    </DataContext.Provider>
  )
}

