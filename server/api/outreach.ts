import { defineEventHandler, readBody } from 'h3';

const outreachSubmissions: any[] = [];

export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    return { error: 'Method Not Allowed' };
  }
  const body = await readBody(event);
  const requiredFields = ['schoolName', 'contactName', 'email', 'details'];
  for (const key of requiredFields) {
    if (!body[key] || typeof body[key] !== 'string') {
      return { error: `Missing or invalid: ${key}` };
    }
  }
  outreachSubmissions.push({ ...body, date: new Date().toISOString() });
  return { success: true };
});
