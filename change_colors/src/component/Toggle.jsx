import data from '../ToggleData';
import ToggleSub from './ToggleSub';

const Toggle = () => {

    return (
        <div className='h-screen grid grid-cols-5'>
            <ToggleSub data={ data } />
        </div>

    
)}

export default Toggle