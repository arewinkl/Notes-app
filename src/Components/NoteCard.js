import "../App.css";

import { useState } from "react";

export default function NoteCard({ note, deleteNote, completedNote }) {
  return (
    <div>
      {note.position === 0 ? (
        <div className="noteCard">
          <h2>Note: {note.text}</h2>
          <h3>Date: {note.date}</h3>
          <h4>Importance: {note.importance}/100</h4>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteNote(note.id);
            }}
          >
            Delete
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              completedNote(note);
            }}
          >
            Completed
          </button>
        </div>
      ) : (
        <div className="old-note-card">
          ` <h2>Note: {note.text}</h2>
          <h3>Date: {note.date}</h3>
          <h4>Importance: {note.importance}/100</h4>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteNote(note.id);
            }}
          >
            Delete
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              completedNote(note);
            }}
          >
            Incompleted
          </button>
        </div>
      )}
    </div>
  );
}
