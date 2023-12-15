import { useEffect } from "react";
import DataManager from "../data/dataManager"

export default function Header(){
  useEffect(()=>{
    DataManager.init();
  })
  return <div className="header">
    <div className="main">
      <h1 className="jap">きほんてき</h1>
      <h1 className="eng">Kihonteki</h1>
    </div>
    <div className="hr"></div>
  </div>
}