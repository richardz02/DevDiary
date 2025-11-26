"use server";

import { createNote, deleteNote, updateNote } from "@/features/notes/api/notes";
import { revalidatePath } from "next/cache";

export async function createNoteAction(payload: {
  title: string;
  body: string;
}) {
  await createNote(payload);

  revalidatePath("/");
}

export async function updateNoteAction(
  noteId: string,
  payload: {
    title: string;
    body: string;
  }
) {
  await updateNote(noteId, payload);

  revalidatePath("/");
}

export async function deleteNoteAction(noteId: string) {
  await deleteNote(noteId);

  revalidatePath("/");
}
