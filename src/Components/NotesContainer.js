import NoteCard from "./NoteCard";

export default function NotesContainer({
  allNotes,
  deleteNote,
  completedNote,
}) {
  console.log(allNotes);
  return (
    <div className="task-container">
      <div className="task-titles">
        <h1>Unfinished Tasks</h1>
        <h1>Completed Tasks</h1>
      </div>
      {allNotes.map((note, i) => (
        <NoteCard
          key={i}
          note={note}
          deleteNote={deleteNote}
          completedNote={completedNote}
        />
      ))}
    </div>
  );
}
