import { createContext, ReactNode, useState } from "react";
import { Note } from "../types";

type NotesContextType = {
  notes: Note[];
};

const NotesContext = createContext<NotesContextType | null>(null);

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (title: string, content: string) => {
    const t = title.trim();
    const c = content.trim();

    const note: Note = {
      id: Date.now().toString(),
      title: t,
      content: c,
      pinned: false,
      updatedAt: Date.now(),
    };

    setNotes((prev) => [note, ...prev]);

    return note;
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export function useNotes() {
    
}
