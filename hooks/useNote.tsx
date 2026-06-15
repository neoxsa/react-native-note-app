import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Note } from "../types";

type NotesContextType = {
  notes: Note[];
  addNote: (title: string, content: string) => Note;
};

const NotesContext = createContext<NotesContextType | null>(null);
const Storage_Key = "notes";

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const storedNotes = await AsyncStorage.getItem(Storage_Key);
        if (storedNotes) {
          setNotes(JSON.parse(storedNotes));
        }
      } catch (error) {
        console.warn(error);
      } finally {
        setHasLoaded(true);
      }
    };

    loadNotes();
  }, []);

  useEffect(() => {
    if (!hasLoaded) return;

    const saveNotes = async () => {
      try {
        await AsyncStorage.setItem(Storage_Key, JSON.stringify(notes));
      } catch (error) {
        console.warn(error);
      }
    };

    saveNotes();
  }, [notes, hasLoaded]);

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
  const ctx = useContext(NotesContext);

  if (!ctx) {
    throw new Error("useNotes must be used within a NotesProvider");
  }

  return ctx;
}
