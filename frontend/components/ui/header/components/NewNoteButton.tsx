"use client";

import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { useMode } from "@/context/ModeContext";

export default function NewNoteButton() {
  const { setMode } = useMode();

  const onNewNote = () => {
    setMode({ type: "create" });
  };

  return (
    <Button
      variant="contained"
      startIcon={<CreateIcon />}
      style={{
        color: "white",
        borderColor: "purple",
        backgroundColor: "purple",
      }}
      onClick={onNewNote}
    >
      New Note
    </Button>
  );
}
