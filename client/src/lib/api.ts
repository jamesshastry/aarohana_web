export async function submitLead(email: string, source: string) {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, source }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit");
  }

  return response.json();
}
