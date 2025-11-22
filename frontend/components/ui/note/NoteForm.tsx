"use client";

import { FormEvent } from "react";
import "./NoteForm.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface Props {
  open: boolean;
  onSubmit: (data: { title: string; body: string }) => void;
  onClose: () => void;
}

export default function NoteForm({ open, onSubmit, onClose }: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const title = formData.get("worklog-title") as string;
    const body = formData.get("worklog-body") as string;

    onSubmit({ title, body });
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} disableRestoreFocus>
        <DialogTitle>Work Log</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Write down what you did at work, what you accomplished, and what you
            need to work on still
          </DialogContentText>
          <form
            id="worklog-form"
            className="worklog-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="form-title" className="sr-only">
              Title
            </label>
            <input
              type="text"
              id="form-title"
              name="worklog-title"
              className="input-title"
              placeholder="Title"
              required
            />

            <label htmlFor="form-body" className="sr-only">
              Body
            </label>
            <textarea
              name="worklog-body"
              id="form-body"
              className="input-textarea"
              placeholder="Start typing here..."
              required
              onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
                const el = e.currentTarget;
                el.style.height = "auto";
                el.style.height = `${el.scrollHeight}px`;
              }}
            ></textarea>
          </form>
        </DialogContent>

        <DialogActions>
          <Button
            type="submit"
            variant="outlined"
            style={{ color: "green", borderColor: "green" }}
            form="worklog-form"
          >
            Add
          </Button>
          <Button
            type="button"
            variant="outlined"
            style={{ color: "red", borderColor: "red" }}
            form="worklog-form"
            onClick={onClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
