import { useContext } from 'react'
import { DataContext } from './GlobalContext';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './slicer';


const Cart = () => {


  // const { cartItems, setCartItems } = useContext(DataContext);
  const cartItems = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  

  return (
    <div className='p-4'>
      <h1 className='text-center text-red-500 text-4xl font-bold my-6'>The Shopping Cart</h1>
      <div className='grid grid-cols-4'>
        <div className='col-span-3'>
          <div className='grid grid-cols-4 gap-2 place-items-center p-4'>
            {
              cartItems && 
              cartItems.map((product)=>{
                return(
                  <div key={product.id} className='border-2 border-red-500 rounded-lg p-3'>
                    <div className='flex'>
                      <img src={product.image} alt={product.title} className='w-full h-48'/>  
                    </div>
                    <p className='text-center'>{product.title.slice(0,20)}</p>
                    <p className='font-bold text-red-500 text-center my-2'>Price:{product.price}</p>
                    <button className='bg-red-500 rounded-md text-white w-full'
                      onClick={()=>{
                      //   setCartItems(cartItems.filter(p=>{
                      //   return p.details.id !== product.details.id
                      // }))
                      dispatch(removeFromCart(product))
                  }}
                    >
                      Remove from Cart
                    </button>
                  </div>
                 
                )
              })
            }
          </div>
        </div>
        <div className='col-span-1 text-center shadow-2xl p-8 rounded-lg'>
          <p className='text-green-500 font-bold text-2xl my-2'>Your Cart Summary</p>
          <p className='text-indigo-500 font-bold my-6'>Total Item(s): <span className='text-xl text-red-500'>{cartItems.length}</span></p>
          <p className='text-xl font-bold my-6'>Total Amount: ${Math.round((cartItems.reduce((total,product)=>total += product.price , 0))*100/100).toFixed(2)}</p>
        </div>
      
      </div>
     

    </div>
  )
}

export default Cart