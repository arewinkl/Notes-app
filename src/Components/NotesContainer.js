import NoteCard from "./NoteCard";

export default function NotesContainer({
  allNotes,
  deleteNote,
  completedNote,
}) {
  return (
    <div>
      <div>
        <h1>Tasks</h1>
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
