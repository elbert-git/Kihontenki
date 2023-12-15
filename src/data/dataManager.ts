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
    // if it exists proceed to load
    if(load){
      DataManager.cache = JSON.parse(load) as UserDecks;
    }
    // else create new data
    else{
      console.log('no data')
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
}