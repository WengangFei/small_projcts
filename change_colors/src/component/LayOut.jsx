import { default as useLayoutSub } from './LayoutSub'

const LayOut = () => {
   
    const { width,height} = useLayoutSub();
  return (
    <div>
        <div>Width: { width }</div>
        <div>Height:{ height }</div>
    </div>
  )
}

export default LayOut

