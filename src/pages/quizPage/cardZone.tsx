import FlashCard from "../../components/flashCard";
import { Card } from "../../data/interfaces";

export default function CardZone(props:{cardsToRender:Array<Card>, isFlip:boolean}){
    const length = props.cardsToRender.length
    const generateStyle = (index:number)=>{
      const style:React.CSSProperties = {
        // backgroundColor:'red',
        transition:'0.8s cubic-bezier(.45,.09,0,1.28)',
        position:'absolute',
        aspectRatio:'2/3',
        padding:'1rem',
        left:'0px',
        translate:'-50% 0%'      }
      if(index === length-1){ // first card
        style.left = `calc(120vw + 50%)`
      }
      else if(index === length-2){ // second last card
        style.left = `calc(0vw + 50%)`
      }
      else{ // bottom stack
        style.left = `calc(-120vw + 50%)`
      }
      return style
    }

    const shouldFlip = (index:number)=>{
      if((props.isFlip && index === length-2)||index < length-2){
        return true
      }else{
        return false
      }
    }

    return <div className="cardZone flex flexAlignCenter flexJustifyCenter fillHeight">
      <div className="cardHolder fillWidth fillHeight flex flexAlignCenter flexJustifyCenter">
        {props.cardsToRender.map((card, index)=>{
          return <div className="cardSlider  fillHeight flex flexAlignCenter flexJustifyCenter" style={generateStyle(index)} key={index}>
            <FlashCard card={card} cardClick={()=>{}} flip={shouldFlip(index)}></FlashCard>
          </div>
        })}
      </div>
    </div>
}