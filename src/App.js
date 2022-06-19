import "./App.css";
import { useState } from "react";
import NoteContainer from "./Components/NotesContainer";
import AddNote from "./Components/AddNote";
import Header from "./Components/Header";
import { stockData } from "./Data";

function App() {
  const [allNotes, setAllNotes] = useState(stockData);
  const [search, setSearch] = useState("");

  console.log(stockData);

  function handleNotes(e) {
    setAllNotes([...allNotes, e]);
  }
  function deleteNote(id) {
    setAllNotes(allNotes.filter((x) => x.id !== id));
  }

  function completedNote(note) {
    if (note.position === 0) {
      note.position = 1;
    } else {
      note.position = 0;
    }
    setAllNotes([...allNotes]);
  }

  const displayNotes = allNotes.filter((notes) =>
    notes.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Header onSearch={setSearch} />
      <AddNote handleNotes={handleNotes} />
      <NoteContainer
        allNotes={displayNotes}
        deleteNote={deleteNote}
        completedNote={completedNote}
      />
    </div>
  );
}

export default App;
