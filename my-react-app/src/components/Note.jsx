import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h3>{props.tittle}</h3>
      <p>{props.text}</p>
      <button
        className="delete-button"
        onClick={() => {
          props.onClick(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Note;
