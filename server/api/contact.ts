import { defineEventHandler } from "h3";

const contactSubmissions = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    message:
      "Hello, I am interested in learning more about Green Sprout Kenya.",
    date: new Date("2024-05-18T14:30:00.000Z").toISOString(),
  },
  {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    message:
      "I am reaching out to inquire about potential partnership opportunities.",
    date: new Date("2024-05-15T10:45:00.000Z").toISOString(),
  },
];

export default defineEventHandler((event) => {
  if (event.method !== "GET") {
    return { error: "Method Not Allowed" };
  }
  return contactSubmissions;
});
