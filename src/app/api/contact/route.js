import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export async function POST(req) {
  try {
    const { name, email, message, captcha } = await req.json();

    if (!name || !email || !message || !captcha) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "All fields and CAPTCHA are required.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Verify reCAPTCHA with Google
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: RECAPTCHA_SECRET_KEY,
          response: captcha,
        }),
      }
    ).then((res) => res.json());

    if (!recaptchaResponse.success) {
      console.error("reCAPTCHA Error:", recaptchaResponse);
      return new Response(
        JSON.stringify({
          success: false,
          error: "CAPTCHA verification failed.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // If CAPTCHA is valid, send email via Resend
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "dylantbabcock@outlook.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to process request" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
