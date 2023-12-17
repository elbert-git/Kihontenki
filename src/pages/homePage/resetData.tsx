import { useEffect, useState } from "react"
import KH_Button from "../../components/kh_button"
import { useNavigate } from "react-router-dom";
import { defaultColors } from "../../data/defaultColors";

export function ResetDataButton(){
  const [count, setCount] = useState(0);

  const click = ()=>{
    setCount(count+1)
  }

  const nav = useNavigate()

  useEffect(()=>{
    if(count===10){console.log('sss'); nav('/resetData')}
  }, [count])

  const style:React.CSSProperties = {
    backgroundColor:defaultColors.red,
    padding:'0.5rem'
  }

  return  <>
    <KH_Button style={style} click={click}>{
      count > 0 ? (
        `Press ${10-count} more times`
      ):(
        "Reset Data"
      )
    }</KH_Button>
  </> 
}