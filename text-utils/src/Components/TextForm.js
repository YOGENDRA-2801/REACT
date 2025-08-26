import React, {useState} from "react";

export default function TextForm(props) {

  const [text, setText] = useState("Default text Value");
//   setText() ;  // Never call setState directly in render body. 

  const upperCase = () => {
    if (text && typeof text === 'string') {
        let newText = text.toUpperCase();
        // let newText = (text || "").toUpperCase();
        setText(newText);
      } else {
        console.log("Text is null or undefined");
        setText(""); // Set empty string as fallback
      }
  }
  const lowerCase = () => {
    let newText = (text || "").toLowerCase();
    setText(newText);
  }
  const rmvExtSpc = () => {
    setText(text.trim().replace(/\s+/g, " ")) ;  // \s for spaces , + for one or more than one , g for global search
  }
  const cpyWhlTxt = () => {
    // let input = document.getElementById("myBox") ; input.select() ; document.execCommand("copy") ; // works fine but execCommand() is deprecated
    let input = document.getElementById("myBox").value ;
    navigator.clipboard.writeText(input) ;
  }
  const clrTxtAra = () => {
    setText("");
  }

  const onBadlaoo = (event) => {
    console.log("On change in text area"); 
    setText(event.target.value) ;
  }

  return (
    <>
      <div className="container">
        <h2 style={ { backgroundColor: (props.mode==="light")?"dark":"light" } }>{props.heading}</h2>
        <div className="mb-3">    
            <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={onBadlaoo}
            style={ {backgroundColor:`${(props.mode==="light")?"dark":"light"}` , color:"red"} }
            ></textarea>
        </div>
        <button className="btn btn-primary" onClick={upperCase}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={lowerCase}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={rmvExtSpc}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={cpyWhlTxt}>Copy Entire Text</button>
        <button className="btn btn-primary mx-2" onClick={clrTxtAra}>Clear Entire Text</button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>Word Count : {text.split(" ").length} , Character Count : {text.length}</p>
        <p>Reading Time :  {0.005 * text.split(" ").length}  minutes</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
