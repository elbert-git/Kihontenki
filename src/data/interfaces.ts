export interface UserDecks{
  decks:Array<Deck>;
  cachedActive?:{[index:string]:boolean};
}

export interface Deck{
  name:string;
  cards:Array<Card>;
  key:string
}

export interface Card{
  front:string;
  back:string;
  frontSize?:number;
  backSize?:number;
  score:number;
  key:string
}