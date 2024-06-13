import { useLocation } from "react-router-dom";

const SingleDetail = () => {

    const{ state } = useLocation();
    console.log(state)
  return (
    <div className="flex justify-normal p-10">
        <div>
            <img src={state.image_url} className="rounded-md"/>
        </div>
        <div className="ml-8 text-left">
            <button className="bg-black py-2 px-4 rounded-md w-full text-white">
                click
            </button>
            <p>{state.publisher}</p>
            <p>{state.title}</p>
            <p>{state.id}</p>
        </div>
        
    </div>
  )
}

export default SingleDetail