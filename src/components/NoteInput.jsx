import React, { useState, useEffect } from 'react';

function NoteInput({ onAddNote, onEditNote, editingNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const maxTitleLength = 50;

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setBody(editingNote.body);
    } else {
      setTitle('');
      setBody('');
    }
  }, [editingNote]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      if (editingNote) {
        onEditNote({
          id: editingNote.id,
          title: title.trim(),
          body: body.trim(),
        });
      } else {
        onAddNote({ title: title.trim(), body: body.trim() });
      }
      setTitle('');
      setBody('');
    }
  };

  return (
    <div className="note-input">
      <h2>{editingNote ? 'Edit Note' : 'Create Note'}</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value.slice(0, maxTitleLength))}
          className="note-input__title"
        />
        <p className="note-input__title__char-limit">
          Remaining characters: {maxTitleLength - title.length}
        </p>
        <textarea
          placeholder="Write your note here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="note-input__body"
        />
        <button type="submit">
          {editingNote ? 'Save Changes' : 'Add Note'}
        </button>
        {editingNote && (
          <button
            type="button"
            onClick={() => {
              setTitle('');
              setBody('');
              onEditNote(null);
            }}
            className="note-input__cancel"
            style={{ marginTop: '8px' }}
          >
            Cancel Edit
          </button>
        )}
      </form>
    </div>
  );
}

export default NoteInput;