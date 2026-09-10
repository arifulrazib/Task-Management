import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Contact form endpoint.
 *
 * This is a working stub: it validates input and returns success.
 * Wire it to a real provider (Resend, Nodemailer/SMTP, SendGrid, a DB, etc.)
 * where indicated below. Keep secrets in UPPERCASE env vars, e.g. RESEND_API_KEY.
 */
export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "All fields are required." }, { status: 422 });
  }
  if (!emailPattern.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 422 });
  }

  // TODO: send the email / persist the lead here. Example with Resend:
  //
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "portfolio@yourdomain.com",
  //     to: process.env.CONTACT_TO_EMAIL!,
  //     subject: `New enquiry from ${name}`,
  //     replyTo: email,
  //     text: message,
  //   });

  return NextResponse.json({ ok: true });
}
