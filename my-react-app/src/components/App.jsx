import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
/* import Notes from "../Notes"; */
import InputField from "./inputField";
import { useState } from "react";
import React from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function HandleClick(note) {
    setNotes((prev) => [...prev, note]);
  }

  function deletItem(id) {
    setNotes((prev) =>
      prev.filter((item, index) => {
        return index !== id;
      }),
    );
  }

  return (
    <div className="container">
      <Header />
      <div className="container-i">
        <InputField className="input-container" onClick={HandleClick} />
      </div>
      <div className="note-container">
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            tittle={note.noteTitle}
            text={note.noteText}
            onClick={deletItem}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
