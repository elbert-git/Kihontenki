import { useRef } from "react";
import KH_Button from "../../components/kh_button";

export default function UploadButton(){
  const inputActual = useRef<any>(null)

  const onUpload = (e:any)=>{
    const file = e.target.files[0]
    console.log(file);
    const reader = new FileReader();
    reader.onload = (res)=>{
      console.log(res.target?.result)
    }
    reader.readAsText(file)
  }

  return <>
    <input hidden ref={inputActual} type="file" name="dss" id="uploadButton" accept=".csv" onChange={(e)=>{onUpload(e)}} />
    <KH_Button style={{}} click={()=>{inputActual.current!.click()}}>
      Upload Custom Deck
    </KH_Button>    
  </>
}