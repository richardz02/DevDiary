import { NoteSummary } from "@/types/note";
import NoteList from "@/components/NoteList";
import { getNotes } from "@/lib/api/notes";

export default async function Home() {
  let notes: NoteSummary[] = [];

  try {
    notes = await getNotes();
  } catch (err) {
    console.error(err);
    return <div>Error loading notes</div>;
  }

  return (
    <>
      <NoteList notes={notes} />
    </>
  );
}
