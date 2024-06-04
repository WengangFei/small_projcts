
import useLocalStorage from './useLocalStorage';

const ChangeTheme = () => {
//    localStorage.clear()
    const[theme,setTheme] = useLocalStorage('theme','bg-white');

  return (
    <div className={`h-screen ${theme === 'bg-black' ? 'bg-white' : 'bg-black'}`}>
        <div className='py-44 pl-36'>
            <span className={`text-3xl ${theme === 'bg-white' ? 'text-white' : 'text-black'}`}>Change Theme</span>
            <div>
                <button className={`${theme} py-1 px-2 rounded-md my-6 ${theme === 'bg-white' ? 'text-black' : 'text-white'}`} 
                onClick={()=>setTheme(theme === 'bg-white' ? 'bg-black' : 'bg-white')}>
                    Change
                </button>  
            </div>
        </div>
    </div>
  )
}

export default ChangeTheme