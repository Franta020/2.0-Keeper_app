import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="note-container">
        <Note />
      </div>
      <Footer />
    </div>
  );
}

export default App;
