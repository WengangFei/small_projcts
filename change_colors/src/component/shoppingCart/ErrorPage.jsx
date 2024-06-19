import face from '../../../public/error.png'

const ErrorPage = () => {
  return (
    <div className='my-8 text-center text-red-500 text-2xl font-bold'>
        Opps, The page is not found!
        <div className='grid place-items-center my-12'>
            <img src={face} height={750} width={550}/> 
        </div>
           
    </div>
  )
}

export default ErrorPage