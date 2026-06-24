import { getSupabaseConfig } from './supabase';

export type DateResponse = {
  answer: string;
  coffee_date_type: string;
  custom_coffee_type?: string;
  her_available_date?: string;
  her_available_time?: string;
  my_selected_date?: string;
  photo_url?: string;
};

export async function saveDateResponse(payload: DateResponse) {
  const config = getSupabaseConfig();

  if (!config) {
    return {
      ok: false,
      message: 'Missing Supabase environment variables.',
      payload
    };
  }

  const response = await fetch(`${config.url}/rest/v1/date_responses`, {
    method: 'POST',
    headers: {
      apikey: config.anonKey,
      Authorization: `Bearer ${config.anonKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Supabase insert failed: ${message}`);
  }

  return { ok: true };
}

export async function uploadPhotoToSupabase(file: File) {
  const config = getSupabaseConfig();

  if (!config) {
    return null;
  }

  const safeName = `${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '-')}`;
  const response = await fetch(`${config.url}/storage/v1/object/photos/${safeName}`, {
    method: 'POST',
    headers: {
      apikey: config.anonKey,
      Authorization: `Bearer ${config.anonKey}`,
      'Content-Type': file.type || 'application/octet-stream',
      'x-upsert': 'true'
    },
    body: file
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Supabase upload failed: ${message}`);
  }

  return `${config.url}/storage/v1/object/public/photos/${safeName}`;
}
