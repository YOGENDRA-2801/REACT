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
    props.displayAlert("Converted to Uppercase", "info")
  }
  const lowerCase = () => {
    let newText = (text || "").toLowerCase();
    setText(newText);
    props.displayAlert("Converted to Lowercase", "info")
  }
  const rmvExtSpc = () => {
    setText(text.trim().replace(/\s+/g, " ")) ;  // \s for spaces , + for one or more than one , g for global search
    props.displayAlert("Extra spaces removed", "success")
  }
  const cpyWhlTxt = () => {
    // let input = document.getElementById("myBox") ; input.select() ; document.execCommand("copy") ; // works fine but execCommand() is deprecated
    let input = document.getElementById("myBox").value ;
    navigator.clipboard.writeText(input) ;
    props.displayAlert("Content copied to clipboard", "success")
  }
  const clrTxtAra = () => {
    setText("");
  }

  const onBadlaoo = (event) => {
    // console.log("On change in text area"); 
    setText(event.target.value) ;
  }

  return (
    <>
      <div className="container">
        <h2 style={ {color:(props.mode==="light")?"black":"white"} }>{props.heading}</h2>
        <div className="mb-3">    
            <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={onBadlaoo}
            style={ {backgroundColor:"#a8dadc" , color:"black"} }
            ></textarea>
        </div>
        <button className="btn btn-danger" onClick={upperCase}>Convert To Uppercase</button>
        <button className="btn btn-danger mx-3" onClick={lowerCase}>Convert To Lowercase</button>
        <button className="btn btn-danger mx-2" onClick={rmvExtSpc}>Remove Extra Spaces</button>
        <button className="btn btn-danger mx-2" onClick={cpyWhlTxt}>Copy Entire Text</button>
        <button className="btn btn-danger mx-2" onClick={clrTxtAra}>Clear Entire Text</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h2>Your text summary</h2>
        <p>Word Count : {text.split(" ").length} , Character Count : {text.length}</p>
        <p>Reading Time :  {0.005 * text.split(" ").length}  minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : "Enter something in textbox to preview it here"}</p>
      </div>
    </>
  );
}
