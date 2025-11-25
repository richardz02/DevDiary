import { Box } from "@mui/material";
import { NoteDetail } from "@/types/note";
import "./NoteList.css";
import NoteCardShell from "./NoteCardShell";

interface Props {
  notes: NoteDetail[];
}

export default async function NoteList({ notes }: Props) {
  return (
    <>
      <Box className="notes-list">
        {notes.map((note) => (
          <NoteCardShell key={note.noteId} note={note} />
        ))}
      </Box>
    </>
  );
}
