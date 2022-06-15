import "../App.css";

export default function NoteCard({ note }) {
  console.log(note);
  return (
    <div className="noteCard">
      <h2>Note: {note.text}</h2>
      <h3>Date: {note.date}</h3>
      <h4>Level of Importance: {note.importance}</h4>
    </div>
  );
}

//Notes text, date, level of importance
