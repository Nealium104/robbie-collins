import type { APIRoute } from "astro";
import { Resend } from "resend";

// Runs as a Netlify Function.
export const prerender = false;

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const MAX = { name: 100, email: 200, message: 5000 } as const;

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char]!,
  );
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

async function verifyTurnstile(
  token: string,
  remoteIp: string | undefined,
): Promise<boolean> {
  const secret = import.meta.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY is not configured");
    return false;
  }

  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (remoteIp) body.append("remoteip", remoteIp);

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      body,
    });
    const result = (await response.json()) as { success?: boolean };
    return result.success === true;
  } catch (error) {
    console.error("Turnstile verification request failed", error);
    return false;
  }
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Expected a JSON body." }, 400);
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const message = String(payload.message ?? "").trim();
  const token = String(payload.turnstileToken ?? "");

  if (!name || !email || !message) {
    return json({ error: "Name, email, and message are all required." }, 400);
  }
  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    message.length > MAX.message
  ) {
    return json({ error: "One or more fields is too long." }, 413);
  }
  if (!isValidEmail(email)) {
    return json({ error: "That email address does not look valid." }, 400);
  }
  if (!token) {
    return json({ error: "Verification challenge was not completed." }, 400);
  }

  if (!(await verifyTurnstile(token, clientAddress))) {
    return json(
      { error: "Verification failed. Please refresh and try again." },
      403,
    );
  }

  const apiKey = import.meta.env.RESEND_KEY;
  const to = import.meta.env.CONTACT_TO_EMAIL;
  const from = import.meta.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error(
      "Mail is not configured (RESEND_KEY/CONTACT_TO_EMAIL/CONTACT_FROM_EMAIL)",
    );
    return json({ error: "Mail is not configured on the server." }, 500);
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `Website Contact <${from}>`,
    to: [to],
    replyTo: email,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    console.error("Resend send failed", error.name, error.message);
    return json(
      { error: "Could not send the message. Please try again." },
      502,
    );
  }

  return json({ ok: true }, 200);
};
