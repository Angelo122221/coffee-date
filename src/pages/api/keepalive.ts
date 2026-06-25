import type { APIRoute } from 'astro';
import { pingSupabaseHealth } from '../../lib/db';

export const GET: APIRoute = async () => {
  const result = await pingSupabaseHealth();
  return Response.json(result);
};
