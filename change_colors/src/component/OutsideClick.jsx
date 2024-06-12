import { useEffect} from 'react'

const OutsideClick = (ref,handler) => {

    useEffect(()=>{

        function listener(e){
            //image is not mounted or after image mounted  
            //disfunction the listener when click on image.
            if(!ref.current || ref.current.contains(e.target)){
                console.log('cancle')
                return
            } 
            handler();
        }
        //setShow(false) re-render takes before eventListener
        //after setShow() run, image is mounted then run
        //listener to trigger the setShow(true)

        //mousedown runs before click

        document.addEventListener('mousedown',listener);
        // document.addEventListener('touchstart',listener);

        return ()=>{
            document.removeEventListener('mousedown',listener);
            // document.removeEventListener('touchstart',listener);
        }

    },[ref,handler])
}

export default OutsideClick