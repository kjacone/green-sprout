import { defineEventHandler, readBody } from 'h3';

const partnershipSubmissions: any[] = [];

export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    return { error: 'Method Not Allowed' };
  }
  const body = await readBody(event);
  const requiredFields = ['organization', 'contactName', 'email', 'message'];
  for (const key of requiredFields) {
    if (!body[key] || typeof body[key] !== 'string') {
      return { error: `Missing or invalid: ${key}` };
    }
  }
  partnershipSubmissions.push({ ...body, date: new Date().toISOString() });
  return { success: true };
});
