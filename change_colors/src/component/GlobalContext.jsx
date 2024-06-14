import { createContext, useState } from 'react';


export const DataContext = createContext(null);

export default function GlobalContext({children}) {

  const[favorites,setFavorites] = useState('');


  return (
    //all global variables are provided in value prop.
    <DataContext.Provider value={{favorites,setFavorites}}>
      { children }
    </DataContext.Provider>
  )
}

