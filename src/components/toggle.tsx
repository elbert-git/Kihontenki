export default function Toggle(props:{on:boolean}){
	const knobStyle:React.CSSProperties = {
		transition:'0.3s',
		position:'relative',
		left: `${props.on?'16':'0'}px`
	}
	return(<div className="toggle interactive">
		<div className="knob" style={knobStyle}></div>
	</div>)
}
