import { API_BASE_URL } from "../config";

export async function getNotes() {
  const res = await fetch(`${API_BASE_URL}/notes`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch notes");
  }

  const { message, data } = await res.json();
  console.log(message);
  return data;
}

export async function createNote(formData: { title: string; body: string }) {
  const res = await fetch(`${API_BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (!res.ok) {
    throw new Error("Failed to create note");
  }

  const { message, data } = await res.json();
  console.log(message);
  console.log(data);
}
