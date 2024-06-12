import React from 'react'

const SearchCityInfo = () => {
  return (
    <div className='text-center'>
        SearchCityInfo
        <div className='bg-green-400 w-2/5 mx-auto my-24 py-8 rounded-md'>
            <input type='text' className='border-2 rounded-md py-1 px-2 '/>
            <button className='bg-black text-white py-1 px-2 rounded-md mx-6'>Search</button>
            <div className='py-4 text-xl font-bold'>Boston MASS</div>
            <div>Wed. Jun 12, 2024</div>
            <div className='py-2 text-6xl font-bold my-4'>234.32</div>
            <div>Mist</div>
            <div className='flex justify-around'>
                <div>
                    <div>3.6</div>
                    <div>Wind Speed</div>
                </div>
                <div>
                    <div>8.8</div>
                    <div>Humidity</div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default SearchCityInfo