"use server";

import { createNote } from "@/lib/api/notes";
import { revalidatePath } from "next/cache";

export async function createNoteAction(payload: {
  title: string;
  body: string;
}) {
  await createNote(payload);

  revalidatePath("/");
}
