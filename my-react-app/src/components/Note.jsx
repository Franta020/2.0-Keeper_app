import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

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
        <DeleteIcon color="error" fontSize="medium" />
      </button>
    </div>
  );
}

export default Note;
