import FlashCard from "../../components/flashCard"
import { Deck } from "../../data/interfaces"
import Toggle from "../../components/toggle"
import { Card } from "../../data/interfaces"
import { useState } from "react"

function CardSlot(props:{card:Card}){
	const [flip, setFlip] = useState(false);
	const [enabled, setEnabled] = useState(true);
	const cardClicked:()=>void = ()=>{setFlip(!flip)}
	const enabledCLicked = ()=>{setEnabled(!enabled)}
	const cardHolderStyle:React.CSSProperties={
		scale: `${enabled?'1':'0.8'}`,
		opacity: `${enabled?'1':'0.3'}`,
		transition: '0.3s'
	}
	return <div className="flex flexColumn flexAlignCenter fillWidth">
		<div className="fillWidth" style={cardHolderStyle}>
			<FlashCard cardClick={cardClicked} card={props.card} flip={flip}/>
		</div>
		<div className="flex fillWidth flexJustifyCenter flexAlignCenter interactive" onClick={enabledCLicked}>
			enable?
			<Toggle on={enabled}></Toggle>
		</div>
	</div>
}

export default function CardGrid(props:{deck:Deck}){
	return <div className="cardGrid">
		{props.deck.cards.map((card)=>{
			return <CardSlot card={card} key={card.key}></CardSlot>
		})}
	</div>
}
