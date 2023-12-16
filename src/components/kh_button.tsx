export default function KH_Button(props:{content:string, style:React.CSSProperties}){
  return <button className="kh_button interactive" style={props.style}>{props.content}</button>
}