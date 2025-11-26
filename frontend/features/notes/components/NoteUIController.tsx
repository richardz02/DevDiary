"use client";

import { useMode } from "@/app/(providers)/ModeContextProvider";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
} from "@mui/material";
import NoteView from "./NoteView/NoteView";
import NoteForm from "./NoteForm/NoteForm";
import {
  createNoteAction,
  updateNoteAction,
} from "@/features/notes/actions/NoteActions";
import { useToast } from "../../../app/(providers)/ToastContextProvider";

const drawerWidth = 300;

export default function NoteUIController() {
  const { mode, setMode } = useMode();
  const { showToast } = useToast();

  // Form submission handler
  // Responsible for create and update notes
  const handleSubmit = async (data: { title: string; body: string }) => {
    console.log("Title: ", data.title);
    console.log("Body: ", data.body);

    let operation: () => Promise<unknown>;
    let successMessage = "";

    if (mode.type === "create") {
      operation = () => createNoteAction(data);
      successMessage = "Note added!";
    } else if (mode.type === "edit") {
      const noteId = mode.note.noteId;
      operation = () => updateNoteAction(noteId, data);
      successMessage = "Note updated!";
    } else {
      return;
    }

    try {
      await operation();
      showToast({ type: "success", message: successMessage });
    } catch (err) {
      console.error(err);
      showToast({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }

    setMode({ type: "closed" });
  };

  return (
    <>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mode.type === "view"}
        onClose={() => setMode({ type: "closed" })}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {mode.type === "view" && <NoteView note={mode.note} />}
      </Drawer>

      <Dialog
        open={mode.type === "create" || mode.type === "edit"}
        onClose={() => setMode({ type: "closed" })}
        disableRestoreFocus
      >
        <DialogTitle>Work Log</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Write down what you did at work, what you accomplished, and what you
            need to work on next
          </DialogContentText>
          {(mode.type === "create" || mode.type === "edit") && (
            <NoteForm
              note={mode.type === "edit" ? mode.note : undefined}
              onClose={() => setMode({ type: "closed" })}
              onSubmit={handleSubmit}
            />
          )}
        </DialogContent>
        <DialogActions>
          {mode.type === "create" && (
            <Button
              form="worklog-form"
              type="submit"
              variant="outlined"
              style={{ color: "green", borderColor: "green" }}
            >
              Add
            </Button>
          )}
          {mode.type === "edit" && (
            <Button form="worklog-form" type="submit" variant="outlined">
              Save
            </Button>
          )}
          <Button
            form="worklog-form"
            type="button"
            variant="outlined"
            style={{ color: "red", borderColor: "red" }}
            onClick={() => setMode({ type: "closed" })}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
