import { useEffect, useState } from "react";
import KH_Button from "../../components/kh_button";
import { defaultColors } from "../../data/defaultColors";
import Accordion from "./Accordion";
import Header from "./header";
import { UserDecks } from "../../data/interfaces";
import DataManager from "../../data/dataManager";
import FlashCard from "../../components/flashCard";

const style:React.CSSProperties = {
  backgroundColor:defaultColors.tael,
  fontSize:'2rem',
  margin:'1rem 0rem',
}

export function HomePage(){
  // state
  const [userData, setUserData] = useState<UserDecks|null>(null);
  // load user data on start
  useEffect(()=>{
    DataManager.init()
    setUserData(DataManager.cache);
  }, [])
  return (
    <>
      <Header></Header>
      <KH_Button content="Quiz" style={style}></KH_Button>
      {/* render all decks  */}
      {userData?userData.decks.map((deck)=>{
        // render all cards
        return <Accordion header={deck.name} key={deck.name}>
          {deck.cards.map((card)=>{
            return <FlashCard card={card} key={card.key}></FlashCard>
          })}
        </Accordion>
      }):"loading..."}
    </>
  )
}