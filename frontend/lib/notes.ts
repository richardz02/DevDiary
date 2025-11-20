export async function getNotes() {
  const res = await fetch("http://127.0.0.1:8080/api/v1/notes", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch notes");
  }

  const { message, data } = await res.json();
  console.log(message);
  return data;
}
