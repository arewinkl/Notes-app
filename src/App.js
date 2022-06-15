import AddNote from "./Components/AddNote";
import NoteCard from "./Components/NoteCard";
import NotesContainer from "./Components/NotesContainer";
import SearchNotes from "./Components/SearchBar";
import "./App.css";
import { useState } from "react";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  function handleNotes(e) {
    setAllNotes([...allNotes, e]);

    // console.log(allNotes);
  }
  function deleteNote(id) {
    // console.log(id);
    setAllNotes(allNotes.filter((x) => x.id !== id));
  }
  function completedNote(id) {
    console.log(id);
  }
  return (
    <div>
      <h1 className="title">Sticky Notes</h1>
      <SearchNotes />
      <AddNote handleNotes={handleNotes} />
      <NotesContainer
        allNotes={allNotes}
        deleteNote={deleteNote}
        completedNote={completedNote}
      />
    </div>
  );
}

export default App;
