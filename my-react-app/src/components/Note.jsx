import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h3>{props.tittle}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default Note;
