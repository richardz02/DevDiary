"use client";

import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

interface Props {
  onNewNote: () => void;
}

export default function NewNoteButton({ onNewNote }: Props) {
  return (
    <Button
      variant="outlined"
      startIcon={<CreateIcon />}
      style={{ color: "purple", borderColor: "purple" }}
      onClick={onNewNote}
    >
      New Note
    </Button>
  );
}
