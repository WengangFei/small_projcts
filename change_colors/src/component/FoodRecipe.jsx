import { useEffect, useState } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom';
import SingleRecepie from './SingleRecepie';

const FoodRecipe = () => {
 
    const[data,setData] = useState(null);
    const[name,setName] = useState('');
    const[recipe,setRecipe] = useState('');
    //navigate to different page after input name 
    const navigate = useNavigate();

    useEffect(()=>{
        (
            async ()=>{
                try{
                    const resp = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipe}`);
                    const data = await resp.json();
                    console.log(data);
                    setData(data.data.recipes);
                    //navigate to all recipe page and send the data to it as well.
                    navigate('/all_recipes',{state: data.data.recipes})
                }catch(e){
                    console.log(e)
                }
            }
        )()
        
    },[recipe])





  return (
    <div className='text-center'>
        
        FoodRecipe
        <div className='flex justify-around my-8'>
            <Link to='/'>Home</Link>
            <form onSubmit={(e)=>{
                e.preventDefault();
                setRecipe(name);
            }}>
                <input type='text' placeholder='Search a recipe' className='border-2 mx-4 rounded-md py-1 px-2'
                onChange={(e)=>{
                    setName(e.target.value);
                    
                    }
                }/>
                <button type='submit' className='bg-green-300 rounded-md py-1 px-2'>Search</button>
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