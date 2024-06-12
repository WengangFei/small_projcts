import { useEffect } from "react"


const ScrollToCardSub = ({color , name, passRef }) => {
  useEffect(()=>{
    console.log(passRef)
  })


  return (
    <div className={`${color} w-80 h-40 m-auto my-8`} ref={passRef} >
       <p>{ name }</p>
    </div>
  )
}

export default ScrollToCardSub