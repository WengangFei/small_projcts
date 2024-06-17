import { createContext, useEffect, useState } from "react";




export const DataContext = createContext(null);


export default function GlobalContext({children}){

    const [products,setProducts] = useState([]);
    const[error,setError] = useState(false);
    const[loading,setLoading] = useState(true);
    const [cartItems,setCartItems] = useState([]);

    useEffect(()=>{

        try{
            (
            async()=>{
                const resp = await fetch('https://fakestoreapi.com/products');
                const data = await resp.json();
                // console.log(data)
                setProducts(data);
                setLoading(false);
            })()
        }catch(e){
            setError(true)
        }   
    },[])


    return(
        <DataContext.Provider value={{
            products,
            error,
            loading,
            setCartItems,
            cartItems
        }}>
            { children }
        </DataContext.Provider>
    )
}
 
