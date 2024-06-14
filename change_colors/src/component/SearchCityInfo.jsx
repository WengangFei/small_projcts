import { useEffect, useState } from 'react'

const SearchCityInfo = () => {

    const key = '6aad4fe2233d33a995c78ee525af9b0e';
    const [error,setError] = useState(false);
    const[location, setLocation] = useState('Boston');
    const[name,setName] = useState('');
    const[data,setData] = useState(null);



    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    useEffect(()=>{

        (
            async ()=>{
                try{
                    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`);
                    const data = await resp.json();
                    setData(data)
                   console.log(data)
                }catch(e){
                    setError(true)
                }
            }
            
        )()

    },[location])
console.log(1)

  return (
    <div className='text-center'>
        <h1 className='text-3xl font-bold mt-12'>Search City Weather Info</h1>
        <div className='bg-green-500 w-2/5 mx-auto my-12 py-8 rounded-lg'>
            <input required type='text' className='border-2 rounded-md py-1 px-2 ' onChange={(e)=>setName(e.target.value)}/>
            <button className='bg-black text-white py-1 px-2 rounded-md mx-6' onClick={()=>setLocation(name)}>Search</button>
            <div className='py-4 text-xl font-bold'>{data?.name}</div>
            <div>{new Date().toLocaleDateString('en-US', options)}</div>
            <div className='py-2 text-6xl font-bold my-4'>{data?.main.temp}</div>
            <div>{data?.weather[0].main}</div>
            <div className='flex justify-around'>
                <div>
                    <div>{data?.wind.speed}</div>
                    <div>Wind Speed</div>
                </div>
                <div>
                    <div>{data?.main.humidity}</div>
                    <div>Humidity</div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default SearchCityInfo