import { useEffect, useState } from "react";
import AddNote from "./components/AddNote";
import Navbar from "./components/Navbar";
import Note from "./components/Note";
import Intro from "./components/Intro";

function App() {
  // define state
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // //show notes when start
  useEffect(() => {
    getNotes();
  }, []);
  //get notes
  const getNotes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://firenote-wpa-default-rtdb.firebaseio.com/notes.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong! Please try again later...!");
      }
      const notes = await response.json();
      const modifiedNotes = [];
      for (const key in notes) {
        modifiedNotes.push({
          id: key,
          note: notes[key]});
      }
      setNotes(modifiedNotes);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  return (
    <div className="App">
      <Navbar totalNotes= {notes.length}/>
      {loading && !error && <p className="loading-msg">Getting Notes....</p>}
      {error && !loading && <p className="error-msg">{error}</p>}
      {!loading && !error && (
        <>
          <AddNote getNotes={getNotes} />
          {notes.map((note, index) => (
            <Note key={index} note={note} getNotes={getNotes} />
          ))}
        </>
      )}
      { notes.length === 0 && <Intro/>}
    </div>
  );
}

export default App;
