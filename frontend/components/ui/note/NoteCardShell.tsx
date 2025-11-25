"use client";

import { NoteDetail } from "@/types/note";
import NoteCard from "./NoteCard";
import { useMode } from "@/context/ModeContext";

export default function NoteCardShell({ note }: { note: NoteDetail }) {
  const { setMode } = useMode();

  return (
    <>
      <div onClick={() => setMode({ type: "view", note: note })}>
        {<NoteCard note={note} />}
      </div>
    </>
  );
}
