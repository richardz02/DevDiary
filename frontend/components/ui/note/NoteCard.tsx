import Paper from "@mui/material/Paper";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NoteDetail } from "@/types/note";
import "./NoteCard.css";

export default function NoteCard({ note }: { note: NoteDetail }) {
  return (
    <>
      <Paper
        style={{ display: "flex", justifyContent: "space-between" }}
        className="note"
      >
        <div className="note-summary">
          <h3>{note.title}</h3>
          <p>{note.createdAt}</p>
        </div>

        <div className="icon">
          <ChevronRightIcon fontSize="large" />
        </div>
      </Paper>
    </>
  );
}
