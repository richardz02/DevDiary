import Paper from "@mui/material/Paper";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NoteSummary } from "@/types/note";
import "./NoteCard.css";

export default function NoteCard({ note }: { note: NoteSummary }) {
  return (
    <>
      <Paper style={{ display: "flex" }} className="note">
        <div>
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
