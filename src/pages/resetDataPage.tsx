import KH_Button from "../components/kh_button"
import { useNavigate } from "react-router-dom"
import DataManager from "../data/dataManager";
import { defaultColors } from "../data/defaultColors";

export default function ResetPage(){
  const nav = useNavigate();
  const style:React.CSSProperties = {
    backgroundColor: defaultColors.tael,
    padding:'0.5rem',
    margin:'1rem 0rem',
    fontSize:'2rem'
  }
  DataManager.clearCache();
  return <div className="fillWidth flex flexColumn flex AlignCenter">
    <h1 className="fillWidth flex flexJustifyCenter">Data Reset Successfully</h1>
    <KH_Button click={()=>{nav('/')}} style={style}>Go Back Home</KH_Button>
  </div>
}