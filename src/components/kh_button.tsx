export default function KH_Button(props:{content:string, style:React.CSSProperties, click:()=>void}){
  return <button onClick={props.click} className="kh_button interactive" style={props.style}>{props.content}</button>
}