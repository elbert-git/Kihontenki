import { ReactNode, useEffect, useState, useRef} from "react";

export default function Accordion(props:{header:string, children:ReactNode}){
  // mainstate
  const [open, setOpen]=useState(true);
  const [maxHeight, setMaxHeight]=useState(500000000000) // initially set to high max num first
  // key vars
  const accordionSlide:any = useRef()
  // styles
  const accordionSlideStyle:React.CSSProperties = {
    transition:'0.3s',
    maxHeight: `${open?maxHeight:0}px`,
    height:'fit-content',
    overflow:'clip'
  }
  const triStyle:React.CSSProperties = {
    rotate: `${open?"0":"-90"}deg`,
    scale:'0.7',
  }
  // effects
  useEffect(()=>{
    setMaxHeight(accordionSlide.current.clientHeight)
  }, [accordionSlide])
  useEffect(()=>{
  }, [open])

  // event callbacks
  const onClick = ()=>{setOpen(!open)}

  return <div className="accordion">
    <div className="topHeader flex" onClick={onClick}>
      <div className="button interactive" style={triStyle}>
          <svg className="svgElement" width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5 31.7095L0.746478 0.959473L36.2535 0.959476L18.5 31.7095Z" fill="black"/>
          </svg>
      </div>
      <h1>{props.header}</h1>
    </div>
    <div className="accordionSlide" ref={accordionSlide} style={accordionSlideStyle}>
      {props.children}
    </div>
  </div>
}