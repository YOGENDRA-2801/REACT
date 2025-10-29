import {useState} from "react";

export default function TextForm(props) {

  const [text, setText] = useState("Default text Value");
//   setText() ;  // Never call setState directly in render body. 

  const upperCase = () => {
    if (text && typeof text === 'string') {
        let newText = text.toUpperCase();
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
    props.displayAlert("Text cleared", "info")
  }

  const onBadlaoo = (event) => {
    // console.log("On every change in text area"); 
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
            style={ {
              backgroundColor: props.colors[props.mode].textarea,
              color: "black",
              border: `2px solid ${props.colors[props.mode].border}`
            } }
            ></textarea>
        </div>
        <button className="btn btn-danger mx-1 my-1" disabled={text===""} onClick={upperCase}>Convert To Uppercase</button>
        <button className="btn btn-danger mx-1 my-1" disabled={text===""} onClick={lowerCase}>Convert To Lowercase</button>
        <button className="btn btn-danger mx-1 my-1" disabled={text===""} onClick={rmvExtSpc}>Remove Extra Spaces</button>
        <button className="btn btn-danger mx-1 my-1" disabled={text===""} onClick={cpyWhlTxt}>Copy Entire Text</button>
        <button className="btn btn-danger mx-1 my-1" disabled={text===""} onClick={clrTxtAra}>Clear Entire Text</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h2>Your text summary</h2>
        <p>Word Count : {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} </p> 
        <p>Character Count : {text.length}</p>
        <p>Reading Time :  {0.005 * ((text || "").split(/\s+/).filter(word => word !== "").length)}  minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : "Enter something in textbox to preview it here"}</p>
      </div>
    </>
  );
}


// "".split(" ") // [""] - length 1 ❌
// "   Y ".split(" ") // ["", "", "", "", "Y", ""] - length 6 ❌
    // Jab space se split karte ho:
    // - **Space से पहले** ka part = ek element
    // - **Space के बाद** ka part = ek element

// /pattern/flags :- Starting / , \s+ - Pattern , Ending / , Flags - Optional (i, g, m ...)
// Filter ek array method hai jo: Condition check karta hai har element pe , True wale elements ko rakhta hai , False wale elements ko hata deta hai , New array return karta hai