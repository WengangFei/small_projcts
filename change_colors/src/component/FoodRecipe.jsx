import { useState,useRef, useContext } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { DataContext } from './GlobalContext';


const FoodRecipe = () => {
 
    const[name,setName] = useState('');
   
    const input = useRef();
    const { setRecipe } = useContext(DataContext);
    const navigate = useNavigate();




  return (
    <div className='text-center'>
        
        FoodRecipe
        <div className='flex justify-around my-8'>
            <Link to='/'>Home</Link>
            <form onSubmit={(e)=>{
                e.preventDefault();
                setRecipe(name);
                navigate('/all_recipes')
                //reset the input to empty string after pulled all data.
                input.current.value = '';
            }}>
                <input ref={input} type='text' placeholder='Search a recipe' className='border-2 mx-4 rounded-md py-1 px-2'
                onChange={(e)=>{
                    setName(e.target.value);
                    
                    }
                }/>
                
            </form>
            <Link to='/favorites'>favorites</Link>
        </div>
     
            
        <div>
           <Outlet />
            
        </div>
    </div>
  )
}

export default FoodRecipe