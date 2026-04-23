import React, { useState } from "react";

function InputField(props) {
  const [note, setNote] = useState({
    noteTitle: "",
    noteText: "",
  });

  function HandleChange(event) {
    const { value, name } = event.target;

    setNote((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div id={props.id} className={props.className}>
      <input
        type="text"
        name="noteTitle"
        placeholder="Title"
        onChange={HandleChange}
        value={note.noteTitle}
      />
      <textarea
        type="text"
        name="noteText"
        rows="3"
        placeholder="Note text"
        onChange={HandleChange}
        value={note.noteText}
      />
      <button
        className="add-button"
        type="button"
        onClick={() => {
          setNote({ noteText: "", noteTitle: "" });
          props.onClick(note);
        }}
      >
        {" "}
        Add
      </button>
    </div>
  );
}

export default InputField;
