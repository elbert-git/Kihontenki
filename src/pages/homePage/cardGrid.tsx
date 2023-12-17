import FlashCard from "../../components/flashCard"
import { Deck } from "../../data/interfaces"
import Toggle from "../../components/toggle"
import { Card } from "../../data/interfaces"
import { useState, useContext } from "react"
import { EnabledCardsContext } from "./home"
import { defaultColors } from "../../data/defaultColors"
import KH_Button from "../../components/kh_button"

function CardSlot(props:{card:Card, heatmap:boolean}){
	const enabledCards = useContext(EnabledCardsContext)[0]
	const setEnabledCards = useContext(EnabledCardsContext)[1];
	const [flip, setFlip] = useState(false);
	const cardClicked:()=>void = ()=>{setFlip(!flip)}
	const cardHolderStyle:React.CSSProperties={
		scale: `${enabledCards[props.card.key]?'1':'0.8'}`,
		opacity: `${enabledCards[props.card.key]?'1':'0.7'}`,
		transition: '0.3s'
	}

	const toggleCardsById = (id:string)=>{
		const clone = {...enabledCards}
		clone[id] = !clone[id]
		setEnabledCards(clone);
	}

	return <div className="flex flexColumn flexAlignCenter fillWidth">
		<div className="fillWidth" style={cardHolderStyle}>
			<FlashCard cardClick={cardClicked} card={props.card} flip={flip} heatmap={props.heatmap}/>
		</div>
		<div className="flex fillWidth flexJustifyCenter flexAlignCenter interactive" onClick={()=>{toggleCardsById(props.card.key)}}>
			enable?
			<Toggle on={enabledCards[props.card.key]}></Toggle>
		</div>
	</div>
}

export default function CardGrid(props:{deck:Deck}){
	const [heatmap, setHeatmap] = useState(false)
	const enabledCards = useContext(EnabledCardsContext)[0]
	const setEnabledCards = useContext(EnabledCardsContext)[1];
  const massToggle = (b:boolean)=>{
		const ids = props.deck.cards.map(card=>card.key)
		const clone = {...enabledCards}
		ids.forEach((id)=>{
			clone[id] = b
		})
		setEnabledCards(clone)
	}
  const massEnableButtonStyles:React.CSSProperties = {
    backgroundColor: defaultColors.green,
    padding:'0.5rem',
    margin:'0.5rem'
  }
	const toggleHeatmap = ()=>{setHeatmap(!heatmap)}
	return <div>
		<div className="fillWidth flex flexJustifyEvenly">
			<KH_Button click={()=>{massToggle(true)}} style={massEnableButtonStyles}>enable all</KH_Button>
			<KH_Button click={()=>{massToggle(false)}} style={massEnableButtonStyles}>disable all</KH_Button>
		</div>
		<div className="fillWidth flex flexJustifyBetween flexAlignCenter" onClick={toggleHeatmap}>
			Show recall heatmap
			<Toggle on={heatmap}></Toggle>
		</div>
		<div className="cardGrid">
			{props.deck.cards.map((card)=>{
				return <CardSlot card={card} key={card.key} heatmap={heatmap}></CardSlot>
			})}
		</div>
	</div>
}
