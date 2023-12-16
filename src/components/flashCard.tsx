import { useEffect, useState } from "react"
import { Card } from "../data/interfaces";

export default function FlashCard(props:{card:Card}):JSX.Element{
  const [flip, setFlip] = useState(false);
  const card = props.card

  const flipperStyle:React.CSSProperties = {
    transform:`rotateY(${flip?180:0}deg)`
  }

  useEffect(()=>{console.log(flip)}, [flip])

  return <div className="flashCard">
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