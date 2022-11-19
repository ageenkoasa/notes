import { useCallback, createContext, useContext, useMemo, useState } from 'react';

const NoteContext = createContext({ note: {}, setNote: () => {} });

//hook
export const useNoteContext = () => {
  return useContext(NoteContext);
};

function NoteContextProvider({ children }) {
  const [note, setTitle] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('note'));
    } catch (e) {
      return {};
    }
  });

  const handleSetNote = useCallback((note) => {
    const noteString = JSON.stringify(note);
    localStorage.setItem('note', noteString);
    setTitle(note);
  }, []);

  const value = useMemo(() => ({ note, setNote: handleSetNote }), [note, handleSetNote]);

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}

export default NoteContextProvider;
