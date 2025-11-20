"use client";

import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Sidebar";
import "./globals.css";
import NoteForm from "@/components/NoteForm";
import { createNoteAction } from "./actions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openForm, setOpenForm] = useState(false); // boolean value to open/close form

  const handleSubmit = async (data: { title: string; body: string }) => {
    console.log("Title: ", data.title);
    console.log("Body: ", data.body);

    await createNoteAction(data);

    setOpenForm(false);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <Header onNewNote={() => setOpenForm(true)} />
        <NoteForm
          open={openForm}
          onSubmit={handleSubmit}
          onClose={handleCloseForm}
        />

        <div className="flex flex-1 overflow-hidden">
          <Navbar />
          <main className="flex-1 flex justify-center">
            <div className="w-full max-w-3xl px-4">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
