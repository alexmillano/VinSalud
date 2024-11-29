import users from './users.json';

export async function GET(req) {
  // Aquí puedes devolver el JSON con los usuarios
  return new Response(JSON.stringify(users), {
    headers: { 'Content-Type': 'application/json' },
  });
}