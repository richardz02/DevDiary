import { Box } from "@mui/material";
import Note from "./Note";
import "./NotesTable.css";

interface Note {
  title: string;
  date: string;
}

// Dummy data
const Notes: Note[] = [
  { title: "Travel app development", date: "18 May 2024 8:30 am" },
  {
    title: "Client Introduction and Project Scope",
    date: "18 May 2024 10:00 am",
  },
  { title: "Brand Identity Discussion", date: "15 June 2024 12:30 pm" },
  { title: "Marketing Alignment and Strategy", date: "28 June 2024 8:30 am" },
  { title: "Budget and Timeline Discussion", date: "12 July 2024 8:30 am" },
];

export default function NotesTable() {
  return (
    <>
      <Box className="notes-table">
        {Notes.map((note, index) => (
          <Note key={index} note={note} />
        ))}
      </Box>
    </>
  );
}
