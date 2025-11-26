"use client";

import { FormEvent, useState } from "react";
import "./NoteForm.css";
import { NoteDetail } from "@/types/note";

interface Props {
  note?: NoteDetail;
  onSubmit: (data: { title: string; body: string }) => void;
  onClose: () => void;
}

export default function NoteForm({ onSubmit, note }: Props) {
  const [title, setTitle] = useState<string>(note?.title ?? "");
  const [body, setBody] = useState<string>(note?.body ?? "");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({ title, body });
  };

  return (
    <>
      <form id="worklog-form" className="worklog-form" onSubmit={handleSubmit}>
        <label htmlFor="form-title" className="sr-only">
          Title
        </label>
        <input
          type="text"
          id="form-title"
          name="worklog-title"
          className="input-title"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="form-body" className="sr-only">
          Body
        </label>
        <textarea
          name="worklog-body"
          id="form-body"
          className="input-textarea"
          placeholder="Start typing here..."
          required
          onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
            const el = e.currentTarget;
            el.style.height = "auto";
            el.style.height = `${el.scrollHeight}px`;
          }}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </form>
    </>
  );
}
