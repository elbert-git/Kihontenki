import { ReactNode } from "react";

export default function KH_Button(props:{children:ReactNode, style:React.CSSProperties, click:()=>void}){
  return <button onClick={props.click} className="kh_button interactive" style={props.style}>
    {props.children}
  </button>
}