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

    console.log(allNotes);
  }

  return (
    <div>
      <SearchNotes />
      <AddNote handleNotes={handleNotes} />
      <NotesContainer allNotes={allNotes} />
    </div>
  );
}

export default App;
