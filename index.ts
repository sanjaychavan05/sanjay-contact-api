import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY") || "re_JsejEPQz_7xtNM6XZKQh9fUMA15jMZS5u");

export default async (req: Request) => {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "sanjaychavan487652@gmail.com",
      subject: `Message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      headers: { "Content-Type": "application/json" },
    });
  }
};


serve(handler);
