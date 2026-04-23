import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function InputField(props) {
  const [iesExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    noteTitle: "",
    noteText: "",
  });

  function HandleChange(event) {
    const { value, name } = event.target;

    setNote((prev) => ({ ...prev, [name]: value }));
  }

  function submitNote() {
    setExpanded(false);
    setNote({ noteText: "", noteTitle: "" });
    props.onClick(note);
  }

  return (
    <div id={props.id} className={props.className}>
      {iesExpanded ? (
        <input
          type="text"
          name="noteTitle"
          placeholder="Title"
          onChange={HandleChange}
          value={note.noteTitle}
        />
      ) : null}

      <textarea
        onClick={() => setExpanded(true)}
        type="text"
        name="noteText"
        rows={iesExpanded ? 3 : 1}
        placeholder="Note text"
        onChange={HandleChange}
        value={note.noteText}
      />
      <Zoom in={iesExpanded}>
        <Fab
          size="small"
          className="add-button"
          /* type="button" */
          onClick={submitNote}
        >
          <AddIcon fontSize="medium" />
        </Fab>
      </Zoom>
    </div>
  );
}

export default InputField;
