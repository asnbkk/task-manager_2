import React, { useContext } from 'react';
import { Wrapper } from './NoteListStyle';
import { NotesContext } from '../context/NotesContext';
import { NoteCard } from '../components';

const NoteList = () => {
  const { notes } = useContext(NotesContext);

  const _notes = notes.map((item) => {
    return <NoteCard note={item} key={item.id} />;
  });

  return <Wrapper>{_notes}</Wrapper>;
};

export default NoteList;
