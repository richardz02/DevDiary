import Paper from "@mui/material/Paper";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Note.css";

interface Note {
  title: string;
  date: string;
}

export default function Note({ note }: { note: Note }) {
  return (
    <>
      <Paper style={{ display: "flex" }} className="note">
        <div>
          <h3>{note.title}</h3>
          <p>{note.date}</p>
        </div>

        <div className="icon">
          <ChevronRightIcon fontSize="large" />
        </div>
      </Paper>
    </>
  );
}
