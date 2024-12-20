import React, { useState } from 'react';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import { getInitialData } from '../utils';

function NoteApp() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [editingNote, setEditingNote] = useState(null);

  const activeNotes = notes.filter((note) => !note.archived && 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const archivedNotes = notes.filter((note) => note.archived && 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const onDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    if (editingNote && editingNote.id === id) {
      setEditingNote(null);
    }
  };

  const onArchive = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, archived: !note.archived } : note
    ));
  };

  const onAddNote = ({ title, body }) => {
    setNotes([
      ...notes,
      {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      }
    ]);
  };

  const onEditNote = (editedNote) => {
    const updatedNotes = notes.map(note => 
      note.id === editedNote.id ? {...note, title: editedNote.title, body: editedNote.body} : note
    );
    setNotes(updatedNotes);
    setEditingNote(null);
  };

  const onSearch = (query) => {
    setSearchQuery(query);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? '#ffffff' : '#202124';
    document.body.style.color = darkMode ? '#202124' : '#ffffff';
  };

  return (
    <div className={`note-app ${darkMode ? 'dark' : 'light'}`}>
      <NoteHeader 
        onSearch={onSearch} 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
      />
      <NoteBody
        activeNotes={activeNotes}
        archivedNotes={archivedNotes}
        onDelete={onDelete}
        onArchive={onArchive}
        onAddNote={onAddNote}
        onEditNote={onEditNote}
        editingNote={editingNote}
        setEditingNote={setEditingNote}
        darkMode={darkMode}
      />
    </div>
  );
}

export default NoteApp;