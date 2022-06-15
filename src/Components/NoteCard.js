export default function NoteCard({ note }) {
  console.log(note);
  return (
    <div>
      <h2>{note.text}</h2>
      <h3>{note.date}</h3>
      <h4>{note.importance}</h4>
    </div>
  );
}

//Notes text, date, level of importance
