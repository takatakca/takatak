
export async function POST(request) {
  const secret = 'MY_WEBHOOK_SECRET';
  
  const webhookSecret = request.headers.get('x-webhook-secret');

  if (webhookSecret !== secret) {
    return new Response(JSON.stringify({ message: 'Invalid secret' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const payload = await request.json();

  // Log payload
  console.log(payload);

  if (payload.type === 'client.created') {
    // Do something here
  }

  return new Response(JSON.stringify({ message: 'OK' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
export async function GET() {
  return new Response("Webhook endpoint is active", { status: 200 });
}
