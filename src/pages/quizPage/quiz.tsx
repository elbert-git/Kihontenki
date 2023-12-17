import { useEffect, useState } from "react";
import DataManager from "../../data/dataManager"
import { Card } from "../../data/interfaces";
import QuizButtons from "./QuizButtons";
import KH_Button from "../../components/kh_button";
import { Back_Mark } from "./svgElements";
import { defaultColors } from "../../data/defaultColors";
import { useNavigate } from "react-router-dom";
import CardZone from "./cardZone";

function clamp(value:number, min=0, max=100) {
  return Math.min(Math.max(value, min), max);
}


export interface ActiveCardData{
  card:Card,
  deckKey:string
}

function getListOfActiveCards(){
  // create returning variable 
  const allActiveCardData:Array<ActiveCardData> = []
  // get list of active keys
  const activeKeys = Object.keys(DataManager.cache.cachedActive!)
    .filter((key)=>{return DataManager.cache.cachedActive![key]}) // filter only active keys
  // for every deck get all active cards and add to active card data
  DataManager.cache.decks.forEach((deck)=>{
    // all active cards
    const activeCardsFromDeck = deck.cards.filter((card)=>{
      return activeKeys.includes(card.key)
    })
    // each card add to active cardd array
    activeCardsFromDeck.forEach((card)=>{
      const activeCardData:ActiveCardData = {
        card: {...card},
        deckKey: deck.key
      }
      allActiveCardData.push(activeCardData)
    })
  })
  return allActiveCardData
}

const backMarkStyle = {
  height:'2.5rem',
  width:'3.5rem',
  display:'flex',
  justifyContent:'center',
  padding:'0.3rem',
  backgroundColor:defaultColors.tael
}


export default function QuizPage(){
  // card list state
  const [flip, setFlip] = useState(false);
  const [allActiveCardDatas, setAllActiveCardDatas] = useState<Array<ActiveCardData>>([])
  const [cardStackIndeces, setCardStackIndeces] = useState<Array<number>>([]);

  // load card list from cache
  useEffect(()=>{
    DataManager.loadData()
    // get list of active cards
    const newCardData = getListOfActiveCards()
    setAllActiveCardDatas(newCardData); 
    // start cardIndexStacks 
    const newCardStack = [ // add 2 new cards
      Math.floor(Math.random()*(newCardData.length)),
      Math.floor(Math.random()*(newCardData.length)),
      Math.floor(Math.random()*(newCardData.length))
    ]
    setCardStackIndeces(newCardStack)
  }, [])

  // generate cards to render
  const cardsToRender = cardStackIndeces.map((cardIndex)=>{
    return allActiveCardDatas[cardIndex].card
  })

  const nav = useNavigate();

  // button callbacks
  const flipButtonCallback = ()=>{setFlip(true)}
  const judgementCallback = (b:boolean)=>{
    // flip back
    setFlip(false);
    // add new card to stack
    const clone = [...cardStackIndeces];
    clone.push(Math.floor(Math.random()*(allActiveCardDatas.length)));
    setCardStackIndeces(clone);
    // save score
    const currentCardData = allActiveCardDatas[cardStackIndeces[cardStackIndeces.length-2]];
    const cacheClone = DataManager.cache;
    // loop through the decks and find the correct deck
    for (let deckIndex = 0; deckIndex < cacheClone.decks.length; deckIndex++) {
      const deck = cacheClone.decks[deckIndex];
      if(deck.key === currentCardData.deckKey){
        // loop through the cards and find the correct card
        for (let index = 0; index < deck.cards.length; index++) {
          const card = deck.cards[index]
          if(card.key === currentCardData.card.key){
            // set score for card
            if(b){card.score+=1}else{card.score-=1}
            // clamp card score
            card.score = clamp(card.score)
            // save to cache 
            cacheClone.decks[deckIndex].cards[index].score = card.score;
            break;
          }
        }
        break;
      }
    }
    //  save data 
    DataManager.saveData(cacheClone);
  }

  return <div className="quiz flex flexColumn fillHeight">
    {/* back header */}
    <div className="backButtonSection flex flexAlignStart fillWidth">
      <KH_Button style={backMarkStyle} click={()=>{nav('/')}}><Back_Mark></Back_Mark></KH_Button>
    </div>
    {/* card zone */}
    <div className="quizCardSection fillWidth flexGrow">
      <CardZone isFlip={flip} cardsToRender={cardsToRender}></CardZone>
    </div>
    {/* quiz buttons */}
    <QuizButtons isFlip={flip} callbacks={[flipButtonCallback, judgementCallback]}></QuizButtons>
  </div>
}