import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Received contact form submission:", body);

    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "tahsin.hassan007@gmail.com",
      subject: subject || "New Portfolio Message",
      replyTo: email,
      html: `
  <div style="font-family: Arial, sans-serif; background:#f5f2eb; padding:30px;">
    
    <div style="max-width:600px;margin:auto;background:#ffffff;border:2px solid #1A1A18;padding:24px;border-radius:8px;">
      
      <h2 style="margin:0 0 20px 0;color:#1A1A18;font-size:20px;">
        📩 New Contact Message
      </h2>

      <div style="margin-bottom:12px;">
        <p style="margin:0;color:#777;font-size:12px;">NAME</p>
        <p style="margin:4px 0 0 0;font-size:14px;color:#1A1A18;font-weight:bold;">
          ${name}
        </p>
      </div>

      <div style="margin-bottom:12px;">
        <p style="margin:0;color:#777;font-size:12px;">EMAIL</p>
        <p style="margin:4px 0 0 0;font-size:14px;color:#1A1A18;">
          ${email}
        </p>
      </div>

      <div style="margin-bottom:16px;">
        <p style="margin:0;color:#777;font-size:12px;">SUBJECT</p>
        <p style="margin:4px 0 0 0;font-size:14px;color:#1A1A18;">
          ${subject || "No subject"}
        </p>
      </div>

      <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />

      <div>
        <p style="margin:0;color:#777;font-size:12px;">MESSAGE</p>
        <div style="margin-top:8px;padding:12px;background:#f5f2eb;border-left:4px solid #1A1A18;font-size:14px;line-height:1.6;color:#1A1A18;">
          ${message}
        </div>
      </div>

      <div style="margin-top:25px;font-size:11px;color:#999;text-align:center;">
        Sent from your portfolio contact form
      </div>

    </div>
  </div>
  `,
    });
    
    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message",
      },
      { status: 500 },
    );
  }
}
