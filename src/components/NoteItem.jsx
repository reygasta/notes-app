import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({ 
  id, 
  title, 
  body, 
  createdAt, 
  archived,
  onDelete, 
  onArchive, 
  setEditingNote,
  darkMode 
}) {
  const onEditClick = () => {
    setEditingNote({
      id,
      title,
      body,
      archived,
      createdAt
    });
  };

  return (
    <div className="note-item">
      <NoteItemContent 
        title={title}
        body={body}
        createdAt={createdAt}
      />
      <NoteItemAction 
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        onEdit={onEditClick}
        archived={archived}
      />
    </div>
  );
}

export default NoteItem;