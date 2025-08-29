import React from "react";
// import React, { useState } from "react";

export default function About(props) {

  const myStyle = {
    color: (props.mode==="light")?"#212529":"#f8f9fa",
    backgroundColor: (props.mode==="light")?"#ffffff":"#343a40",
    border: `2px solid ${(props.mode==="light")?"#dee2e6":"#495057"}`
  }

  /* const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "2px solid none",
  }); */
  // const [text, settext] = useState("Enable Dark Mode");
  /* let switchmode = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
      });
      settext("Enable Dark Theme");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      settext("Enable White Theme");
    }
  }; */

  return (
    <>
      <div className="accordion container my-3" id="accordionExample">
      <h1 className="my-3" style={{color: (props.mode==="light")?"#212529":"#f8f9fa"}}>ABOUT US</h1>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                Textutils gives you a way to analyze your text quickly and
                efficiently. Be it word count, character count or text operation
                and many more text related things.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                TextUtils is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                TextUtils reports the number of words and characters. Thus it is
                suitable for writing text with word/ character limit.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                This word counter software works in any web browsers such as
                Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
                count characters in facebook, blog, books, excel document, pdf
                document, essays, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <button type="button" className="btn btn-primary" onClick={switchmode}>
          {text}
        </button> */}
      </div>
    </>
  );
}
