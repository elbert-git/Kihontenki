import KH_Button from "../../components/kh_button"
import { defaultColors } from "../../data/defaultColors"
import { Tick_Mark, X_Mark} from "./svgElements"


export default function QuizButtons(props:{callbacks:Array<any>, isFlip:boolean}){

  const judgementSectionStyle:React.CSSProperties = {
    opacity:props.isFlip ? '1':'0',
    pointerEvents:props.isFlip ? 'auto':'none'
  }
  const flipButtonStyle:React.CSSProperties = {
    padding:'0.5rem 1rem',
    fontSize:'2.5em',
    backgroundColor:defaultColors.tael,
    width:'max-content'
  }

  const flipClick = ()=>{
    const flipButtonClicked = props.callbacks[0]
    flipButtonClicked();
  }
  const onJudgementClicked = (b:boolean)=>{
    const judgeCallback = props.callbacks[1]
    judgeCallback(b)
  }

  return <div className="quizButtons relative fillWidth flex flexAlignCenter flexJustifyCenter">
    <div className="flipSection flex flexAlignCenter flexJustifyCenter fillHeight">
      <KH_Button click={flipClick} style={flipButtonStyle}>Flip</KH_Button> 
    </div>
    <div style={judgementSectionStyle} className="judgementSection overlay flex flexAlignCenter flexJustifyCenter fillWidth fillHeight">
      <div className="squezeCenter fillWidth fillHeight flex flexAlignCenter flexJustifyCenter" style={{maxWidth:'400px'}}>
        <KH_Button click={()=>{onJudgementClicked(false)}} style={{backgroundColor:defaultColors.red, width:'50%'}}><X_Mark></X_Mark></KH_Button> 
        <KH_Button click={()=>{onJudgementClicked(true)}} style={{backgroundColor:defaultColors.lightGreen, width:'50%'}}><Tick_Mark></Tick_Mark></KH_Button> 
      </div>
    </div>
  </div>
}