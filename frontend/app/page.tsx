import NoteList from "@/features/notes/components/NoteList/NoteList";
import NoteUIController from "@/features/notes/components/NoteUIController";
import { getNotes } from "@/features/notes/api/notes";
import { NoteDetail } from "@/types/note";

export default async function Home() {
  let notes: NoteDetail[] = [];

  try {
    notes = await getNotes();
  } catch (err) {
    console.error(err);
    return <div>Error loading notes</div>;
  }

  return (
    <>
      {notes.length === 0 ? (
        <div>Start by adding notes</div>
      ) : (
        <NoteList notes={notes} />
      )}
      <NoteUIController />
    </>
  );
}
