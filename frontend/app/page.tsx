import { NoteSummary } from "@/types/note";
import NoteList from "@/components/ui/note/NoteList";
import { getNotes } from "@/lib/api/notes";

export default async function Home() {
  let notes: NoteSummary[] = [];

  try {
    notes = await getNotes();
  } catch (err) {
    console.error(err);
    return <div>Error loading notes</div>;
  }

  if (notes.length === 0) {
    return <div>Start by adding notes</div>;
  }

  return <NoteList notes={notes} />;
}
