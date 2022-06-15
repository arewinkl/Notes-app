import NoteCard from "./NoteCard";

export default function NotesContainer({
  allNotes,
  deleteNote,
  completedNote,
}) {
  return (
    <div>
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
