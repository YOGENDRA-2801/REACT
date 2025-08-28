import React from "react";

function Alert(props) {
  return (
    <>
      {props.alrtMsg && <div className={`alert alert-${props.alrtMsg.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alrtMsg.type} : </strong>{props.alrtMsg.message}
        {/* 
            Jab aap alert ko cross (✕) button se close karte ho, to Bootstrap ka JavaScript us alert element ko DOM se completely remove kar deta hai - ye React ke control se bahar hota hai. Bootstrap ka data-bs-dismiss="alert" React ke state management se sync nahi hai. React ko lagta hai alert abhi bhi render hona chahiye, lekin DOM se gayab hai. Hence used set-time-out to overcome this.
        */}
      </div>}
    </>
  );
}



export default Alert;
