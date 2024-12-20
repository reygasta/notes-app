import React from 'react';

function NoteHeader({ onSearch, darkMode, toggleDarkMode }) {
  return (
    <div className="note-app__header">
      <h1>Notes App</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Search notes..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <button 
        onClick={toggleDarkMode}
        className="theme-toggle"
        style={{
          backgroundColor: 'transparent',
          border: '1px solid #aaa',
          color: darkMode ? '#ffffff' : '#202124',
          padding: '8px 16px',
          borderRadius: '4px',
          marginLeft: '16px',
          cursor: 'pointer'
        }}
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </div>
  );
}

export default NoteHeader;