import { useState } from "react";

export default function AddNote({ handleNotes }) {
  const [writtenNote, setWrittenNote] = useState({
    text: "",
    date: "",
    importance: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    handleNotes(writtenNote);
    console.log(writtenNote);
  }
  return (
    <div>
      <form className="noteForm" onSubmit={handleSubmit}>
        <input
          placeholder="write a note!"
          className="formInputs"
          type="text"
          name="text"
          onChange={(e) =>
            setWrittenNote({ ...writtenNote, [e.target.name]: e.target.value })
          }
          value={writtenNote.text}
        ></input>
        <input
          className="formInputs"
          type="date"
          name="date"
          onChange={(e) =>
            setWrittenNote({ ...writtenNote, [e.target.name]: e.target.value })
          }
          value={writtenNote.date}
        ></input>
        <input
          className="formInputs"
          type="range"
          name="importance"
          onChange={(e) =>
            setWrittenNote({
              ...writtenNote,
              [e.target.name]: e.target.value,
            })
          }
          value={writtenNote.importance}
        ></input>
        <input className="formInputs" type="submit"></input>
      </form>
    </div>
  );
}
