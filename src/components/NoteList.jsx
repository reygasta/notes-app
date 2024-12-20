import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive, setEditingNote, darkMode }) {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p className="notes-list__empty-message">No notes available</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            setEditingNote={setEditingNote}
            darkMode={darkMode}
            {...note}
          />
        ))
      )}
    </div>
  );
}

export default NoteList;