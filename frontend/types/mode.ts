import { NoteDetail } from "./note";

export type Mode =
  | { type: "closed" }
  | { type: "view"; note: NoteDetail }
  | { type: "edit"; note: NoteDetail }
  | { type: "create" };
