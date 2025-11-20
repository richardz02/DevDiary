import { Box } from "@mui/material";
import NoteCard from "./NoteCard";
import { NoteSummary } from "@/types/note";
import "./NoteList.css";

interface Props {
  notes: NoteSummary[];
}

export default async function NoteList({ notes }: Props) {
  return (
    <>
      <Box className="notes-list">
        {notes.map((note) => (
          <NoteCard key={note.noteId} note={note} />
        ))}
      </Box>
    </>
  );
}
