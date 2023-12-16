import { useEffect, useState, createContext } from "react";
import KH_Button from "../../components/kh_button";
import { defaultColors } from "../../data/defaultColors";
import Accordion from "./Accordion";
import Header from "./header";
import { UserDecks } from "../../data/interfaces";
import DataManager from "../../data/dataManager";
import CardGrid from "./cardGrid";

const mainQuizButtonStyle:React.CSSProperties = {
  backgroundColor:defaultColors.tael,
  fontSize:'2rem',
  margin:'1rem 0rem',
}

interface EnabledCardsState{
  [index:string]:boolean
}

export const EnabledCardsContext = createContext<any>([])

export function HomePage(){
  // state
  const [userData, setUserData] = useState<UserDecks|null>(null);
  const [enabledCards, setEnabledCards] = useState<EnabledCardsState>({})
  const setEnabledCardsAndSaveData = (state:any)=>{
    // modify enabled cardsstate
    setEnabledCards(state)
    // modify cache
    const userDataClone = {...userData}
    userDataClone.cachedActive = state
    // save cache
    DataManager.saveData(userDataClone as UserDecks)
  }

  // load user data on start
  useEffect(()=>{
    DataManager.init()
    const cache = DataManager.cache;
    // set cache
    setUserData(cache);
    // load active state of cards
    setEnabledCards(cache.cachedActive as EnabledCardsState)
  }, [])

  return (
    <EnabledCardsContext.Provider value={[enabledCards, setEnabledCardsAndSaveData]}>
        <Header></Header>
        <KH_Button click={()=>{}} content="Quiz" style={mainQuizButtonStyle}></KH_Button>
        {/* render all decks  */}
        {userData?userData.decks.map((deck)=>{
          // render all cards
          return <Accordion header={deck.name} key={deck.name}>
            <CardGrid deck={deck}></CardGrid>
          </Accordion>
        }):"loading..."}
    </EnabledCardsContext.Provider>
  )
}
