import { deleteNoteAction } from "@/app/actions/NoteActions";
import { useMode } from "@/context/ModeContext";
import { NoteDetail } from "@/types/note";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useToast } from "../toast/ToastProvider";

export default function NoteView({ note }: { note: NoteDetail }) {
  const { setMode } = useMode();
  const { showToast } = useToast();

  const handleDelete = async () => {
    const userResponse = confirm("Are you sure you want to delete this note?");

    if (userResponse) {
      try {
        await deleteNoteAction(note.noteId);
        showToast({ type: "success", message: "Note deleted!" });
      } catch (err) {
        console.error(err);
        showToast({ type: "error", message: "Failed to delete note." });
      }

      setMode({ type: "closed" });
    }
  };

  return (
    <>
      <Box className="note-detail" sx={{ padding: "5px", width: "100%" }}>
        <div className="note-header">
          <Typography>{note.title}</Typography>
          <Typography>{note.createdAt}</Typography>
        </div>

        <Divider />

        <div className="note-body">
          <Typography>{note.body}</Typography>
        </div>

        <div
          className="buttons"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button
            type="button"
            variant="outlined"
            className="edit-btn"
            onClick={() => setMode({ type: "edit", note: note })}
          >
            Edit
          </Button>
          <Button
            type="button"
            variant="outlined"
            className="delete-btn"
            style={{ color: "red", borderColor: "red" }}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </Box>
    </>
  );
}
