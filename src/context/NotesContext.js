import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
import Notes from './Notes';

//initial state
const initialState = {
  notes: Notes,
};

//create context
export const NotesContext = createContext(initialState);

//provider component
export const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  //actions
  function deleteNote(id) {
    dispatch({
      type: 'DELETE_NOTE',
      payload: id,
    });
  }

  return (
    <NotesContext.Provider
      value={{
        notes: state.notes,
        deleteNote,
      }}>
      {children}
    </NotesContext.Provider>
  );
};
