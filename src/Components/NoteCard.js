import "../App.css";

import { useState } from "react";

export default function NoteCard({ note, deleteNote, completedNote }) {
  return (
    <div className="note-container">
      {note.position === 0 ? (
        <div className="incomplete-card">
          <h2>Note: {note.text}</h2>
          <h3>Date: {note.date}</h3>
          <h4>Importance: {note.importance}/100</h4>
          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              deleteNote(note.id);
            }}
          >
            Delete
          </button>
          <button
            className="completed-btn"
            onClick={(e) => {
              e.stopPropagation();
              completedNote(note);
            }}
          >
            Completed
          </button>
        </div>
      ) : (
        <div className="complete-card">
          ` <h2>Note: {note.text}</h2>
          <h3>Date: {note.date}</h3>
          <h4>Importance: {note.importance}/100</h4>
          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              deleteNote(note.id);
            }}
          >
            Delete
          </button>
          <button
            className="incomplete-btn"
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
