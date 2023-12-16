import createDefaultData from "./createDefaultData";
import { UserDecks } from "./interfaces";

const localCacheKey = 'kihonteki'

// for prod testing
const canForceClear = true

export default class DataManager{
  static cache:UserDecks;
  constructor(){}

  static init(){
    // load from disk if it exists
    const load = localStorage.getItem(localCacheKey);
    if(load){ // if it exists proceed to load
      DataManager.cache = JSON.parse(load) as UserDecks;
    }else{ // else create new data
      DataManager.saveData(createDefaultData())
    }
  }

  static clearCache(){
    if(canForceClear){
      localStorage.removeItem(localCacheKey)
      console.log('cache cleared')
    }
    else{
      console.error('cache protected from clearing')
    }
  }

  static saveData(userDeck:UserDecks){
    DataManager.cache = userDeck;
    localStorage.setItem(localCacheKey, JSON.stringify(userDeck));
  }
}