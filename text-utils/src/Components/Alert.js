import React from "react";

function Alert(props) {
  return (
    <> <div style={{height:"50px"}}>
      {props.alrtMsg && <div className={`alert alert-${props.alrtMsg.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alrtMsg.type} : </strong>{props.alrtMsg.message}
        {/* 
            Jab aap alert ko cross (✕) button se close karte ho, to Bootstrap ka JavaScript us alert element ko DOM se completely remove kar deta hai - ye React ke control se bahar hota hai. Bootstrap ka data-bs-dismiss="alert" React ke state management se sync nahi hai. React ko lagta hai alert abhi bhi render hona chahiye, lekin DOM se gayab hai. Hence used set-time-out to overcome this.
        */}
      </div>}</div>
    </>
  );
}
export default Alert;

// CLS = Cumulative Layout Shift -- content display hone p layout shift hota hai jagah banane k liye
// CLS -- not good for website , google search engine website with CLS ko prefer nahi krta
// Solution -- Enn component ko inki khud ki height width dedo hence jab absent rhnge tabhi inka space reserve hoga