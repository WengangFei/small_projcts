import { useContext } from 'react'
import { DataContext } from './GlobalContext';
import ClipLoader from "react-spinners/ClipLoader";


const Home = () => {

  //get all data from global context
  
  const {
          products,
          error,
          loading,
          setCartItems,
          cartItems
     } = useContext(DataContext);


  console.log(cartItems)




  return (

    <div className='p-24'>
      {
        loading && 
        <>
        <h1 className='text-red text-3xl font-bold text-center my-4'>Loading the Products ......</h1>
          <ClipLoader
            loading={loading}
            cssOverride={{display: 'block',margin:'0 auto', borderColor:'red'}}
            size={150}
          />
        </>
        
      }
      {
        error ?
        <>
          <h1 className='text-red text-3xl font-bold text-center my-4'>
            Opps,Can not loading the product.
          </h1>
        </>:
        <div className='grid grid-cols-4 gap-10'>
          {
            products && products.map(item=>{

              return(
                <div key={item.id} className='border-4 border-red-700 rounded-lg p-4 grid place-content-center'>
                  <div className='flex p-4'>
                    <img src={item.image} alt={item.title} className='w-full h-64'/>
                  </div>
                  <p className='my-2 text-center'>{
                    item.title.length > 20 ? item.title.slice(0,20)+'.....' : item.title
                  }</p>
             
                  <button className='bg-red-700 rounded-md py-1 px-2 my-2 text-white'
                    onClick={()=>{
                      
                 
                  
                  }}
                  >
                    { cartItems.find(product=>product.detail.id === item.id)?.inCart ? 'Remove from Cart' : 'Add to Cart'}
                  </button>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default Home