import { defaultColors } from "../data/defaultColors";
import { Card } from "../data/interfaces";


export default function FlashCard(props:{card:Card,flip:boolean, cardClick?:()=>void, heatmap?:boolean}):JSX.Element{
  const card = props.card

  const flipperStyle:React.CSSProperties = {
    transform:`rotateY(${props.flip?180:0}deg)`,
  }

  const scoreToColor = (score:number)=>{
    console.log(score)
    let finalCol = '#76FF7B'
    if(score < 80){finalCol = '#E4F28E'}
    if(score < 40){finalCol = '#FFC977'}
    if(score < 60){finalCol = '#FF9E80'}
    if(score < 20){finalCol = '#FF8585'}
    return finalCol
  }

  const cardColorStyle:React.CSSProperties = {
    backgroundColor: `${props.heatmap?scoreToColor(props.card.score):defaultColors.green}`
    // backgroundColor: `${true?scoreToColor(props.card.score):defaultColors.green}`
  }

  return <div className="flashCard" onClick={props.cardClick?props.cardClick:()=>{}}>
    <div className="flipper" style={flipperStyle}>
      <div className="frontSide cardFace flex flexJustifyCenter flexAlignCenter"
        style={{fontSize:`${card.frontSize}em`, ...cardColorStyle}}
      >{card.front}</div>
      <div className="backSide cardFace flex flexJustifyCenter flexAlignCenter"
        style={{fontSize:`${card.backSize}em`, ...cardColorStyle}}
      >{card.back}</div>
    </div>
  </div>
}
