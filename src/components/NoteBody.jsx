import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

function NoteBody({ 
  activeNotes, 
  archivedNotes, 
  onDelete, 
  onArchive, 
  onAddNote, 
  onEditNote,
  editingNote,
  setEditingNote,
  darkMode 
}) {
  return (
    <div className="note-app__body">
      <NoteInput 
        onAddNote={onAddNote} 
        onEditNote={onEditNote}
        editingNote={editingNote}
        darkMode={darkMode} 
      />
      <h2>Active Notes</h2>
      <NoteList 
        notes={activeNotes}
        onDelete={onDelete}
        onArchive={onArchive}
        setEditingNote={setEditingNote}
        darkMode={darkMode}
      />
      <h2>Archived Notes</h2>
      <NoteList 
        notes={archivedNotes}
        onDelete={onDelete}
        onArchive={onArchive}
        setEditingNote={setEditingNote}
        darkMode={darkMode}
      />
    </div>
  );
}

export default NoteBody;