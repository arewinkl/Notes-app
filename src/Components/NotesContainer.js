import NoteCard from "./NoteCard";

export default function NotesContainer({ allNotes }) {
  console.log(allNotes);

  return (
    <div>
      {allNotes.map((note, i) => (
        <NoteCard key={i} note={note} />
      ))}
    </div>
  );
}
