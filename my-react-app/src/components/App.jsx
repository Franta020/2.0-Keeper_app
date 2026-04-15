import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../Notes";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="note-container">
        {Notes.map((note) => (
          <Note key={note.id} tittle={note.title} text={note.text} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
