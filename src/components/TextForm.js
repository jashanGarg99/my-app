import React,{useState} from 'react'


// props.mode=== "#107fff" ? "black" : "white" #878787

export default function TextForm(props) {
    const ToUppercase = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Updated to Uppercase","success");
    }
    const ToLowercase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Updated to Lowercase","success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const ToClear =()=>{
        setText("");
        props.showAlert("Cleared","success");
    }
    const ToRevSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    const ToCopy=()=>{
        let newText=document.getElementById("exampleFormControlTextarea1");
         newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied","success");
    }
    let style1={
        borderColor : 'black',
        borderRadius : '5px',
        margin : '5px 5px 5px 5px',
        padding : '20px',
        backgroundColor : '#FCFBDE',
        height : 'max-content',
    }
    const formStyle={
        backgroundColor : props.mode=== "#107fff" ? "white" : "#003f89" ,
        color : props.mode=== "#107fff" ? "black" : "white"
    }
    const textAreaStyle={
        backgroundColor : props.mode=== "#107fff" ? "white" : "#878787"
    }
    const [text,setText]=useState("");
  return (
    <>
    <div style={formStyle} >
      <h2 className='text-center' >{props.title}</h2>
      <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">Text Here</label>
      <textarea className="form-control" style={textAreaStyle}  value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9"></textarea>
      </div>
      <button className="btn btn-primary m-1" onClick={ToUppercase} >To uppercase</button>
      <button className="btn btn-primary m-1 " onClick={ToLowercase} >To Lowercase</button>
      <button className="btn btn-primary m-1 " onClick={ToCopy} >Copy</button>
      <button className="btn btn-primary m-1 " onClick={ToRevSpace} >To RemoveExtra space</button>
      <button className="btn btn-primary mx-1" onClick={ToClear} >clear</button>
    </div>
    <div className="container my-3" style={formStyle} >
        <h2><b>Text Summary</b></h2>
        <div className="container text-center">
            <div className="row align-items-start">
                <div className="col">
                    Total Words
                </div>
                <div className="col">
                {/* let newText=text.split(/[ ]+/);
                setText(newText.join(" ")); */}
                    <b>{text.trim()=== "" ? 0 : text.trim().split(/\s+/).length}</b>
                </div>
            </div>
        </div>
        <div className="container text-center">
            <div className="row align-items-start">
                <div className="col">
                    Total chracters
                </div>
                <div className="col">
                    <b>{text.trim().split(/\s+/).join("").length}</b>
                </div>
            </div>
        </div>
        <div className="container text-center">
            <div className="row align-items-start">
                <div className="col">
                    Reading Time
                </div>
                <div className="col">
                    <b>{Math.ceil(text.trim().split(/\s+/).join("").length*0.1)} sec</b>
                </div>
            </div>
        </div>
        <div className="container text-center">
            <div className="row align-items-start">
                <div className="col">
                    Speaking Time
                </div>
                <div className="col">
                    <b>{Math.ceil(text.trim().split(/\s+/).join("").length*0.2)} sec</b>
                </div>
            </div>
        </div>
    </div>
    <div className="container my-3" style={formStyle} >
        <h2>
            <b>Preview Text</b>
        </h2>
    </div>
    <div className="container" style={style1} >
            <p>{text.trim().split(/\s+/).join("").length>0? <b>{text}</b> : <b>Enter some text in upper box to preview it here</b> }</p>
    </div>
    </>
  )
}
