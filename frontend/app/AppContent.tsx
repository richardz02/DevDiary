import NoteForm from "@/components/ui/note/NoteForm";
import Header from "@/components/ui/header/Header";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import { useToast, ToastProvider } from "@/components/ui/toast/ToastProvider";
import { useState } from "react";
import { createNoteAction } from "./actions/createNoteAction";

export default function AppContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openForm, setOpenForm] = useState(false); // boolean value to open/close form
  const { showToast } = useToast();

  const handleSubmit = async (data: { title: string; body: string }) => {
    console.log("Title: ", data.title);
    console.log("Body: ", data.body);

    try {
      await createNoteAction(data);
      showToast({ type: "success", message: "Note added!" });
    } catch (err) {
      console.error(err);
      showToast({ type: "error", message: "Failed to add note." });
    }

    setOpenForm(false);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  return (
    <ToastProvider>
      <Header onNewNote={() => setOpenForm(true)} />
      <NoteForm
        open={openForm}
        onSubmit={handleSubmit}
        onClose={handleCloseForm}
      />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex justify-center">
          <div className="w-full max-w-3xl px-4">{children}</div>
        </main>
      </div>
    </ToastProvider>
  );
}
