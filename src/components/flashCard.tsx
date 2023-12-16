import { Card } from "../data/interfaces";

export default function FlashCard(props:{card:Card,flip:boolean, cardClick?:()=>void}):JSX.Element{
  const card = props.card

  const flipperStyle:React.CSSProperties = {
    transform:`rotateY(${props.flip?180:0}deg)`
  }

  return <div className="flashCard" onClick={props.cardClick?props.cardClick:()=>{}}>
    <div className="flipper" style={flipperStyle}>
      <div className="frontSide cardFace flex flexJustifyCenter flexAlignCenter"
        style={{fontSize:`${card.frontSize}rem`}}
      >{card.front}</div>
      <div className="backSide cardFace flex flexJustifyCenter flexAlignCenter"
        style={{fontSize:`${card.backSize}rem`}}
      >{card.back}</div>
    </div>
  </div>
}
