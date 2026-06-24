import type { APIRoute } from 'astro';
import { saveDateResponse, uploadPhotoToSupabase } from '../../lib/db';

export const GET: APIRoute = async () => {
  return new Response('Method not allowed', { status: 405 });
};

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const photo = formData.get('photo');
  const photoUrl = photo instanceof File && photo.size > 0 ? await uploadPhotoToSupabase(photo) : '';
  const payload = {
    answer: String(formData.get('answer') || ''),
    coffee_date_type: String(formData.get('coffee_date_type') || ''),
    custom_coffee_type: String(formData.get('custom_coffee_type') || ''),
    her_available_date: String(formData.get('her_available_date') || ''),
    her_available_time: String(formData.get('her_available_time') || ''),
    my_selected_date: String(formData.get('my_selected_date') || ''),
    photo_url: photoUrl || ''
  };

  await saveDateResponse(payload);

  return Response.redirect(new URL('/thank-you', request.url), 303);
};
