import { defineEventHandler, readBody } from 'h3';

// Simple in-memory store for demonstration (not preserved between server restarts)
const volunteerSubmissions: any[] = [];

export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    return { error: 'Method Not Allowed' };
  }
  const body = await readBody(event);
  // Simple validation logic
  const requiredFields = ['name', 'email', 'interests'];
  for (const key of requiredFields) {
    if (!body[key] || typeof body[key] !== 'string') {
      return { error: `Missing or invalid: ${key}` };
    }
  }
  // Log submission (placeholder for real persistence)
  volunteerSubmissions.push({ ...body, date: new Date().toISOString() });
  return { success: true };
});
