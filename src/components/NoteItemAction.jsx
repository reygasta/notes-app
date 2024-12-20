import React from 'react';

function NoteItemAction({ id, onDelete, onArchive, onEdit, archived }) {
  return (
    <div className="note-item__action">
      <button
        className="note-item__delete-button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => onArchive(id)}
      >
        {archived ? 'Move to Active' : 'Archive'}
      </button>
      <button
        className="note-item__edit-button"
        onClick={onEdit}
        style={{
          backgroundColor: 'transparent',
          border: '0',
          borderTop: '1px solid #aaa',
          padding: '8px 0',
          color: '#bbe650',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          cursor: 'pointer',
          width: '100%'
        }}
      >
        Edit
      </button>
    </div>
  );
}

export default NoteItemAction;