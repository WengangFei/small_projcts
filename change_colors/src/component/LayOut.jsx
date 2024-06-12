import { default as useLayoutSub } from './LayoutSub'

const LayOut = () => {
    console.log(1)
    const { width,height} = useLayoutSub();
  return (
    <div>
        <div>Width: { width }</div>
        <div>Height:{ height }</div>
    </div>
  )
}

export default LayOut