import { useState, useLayoutEffect } from 'react'

const LayoutSub = () => {

    const[size,setSize] = useState({width:0,height:0});

 

    useLayoutEffect(()=>{

        function changeSize(){
            setSize({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }

        window.addEventListener('resize',changeSize);

        return ()=>{ removeEventListener('resize',changeSize)}
    },[]);


    return size;
    
}

export default LayoutSub