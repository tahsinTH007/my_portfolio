import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "tahsin.hassan007@gmail.com",
      subject: subject || "New Portfolio Message",
      replyTo: email,
      html: `
  <div style="font-family:'Courier New',Courier,monospace;background:#111616;padding:30px;">

    <div style="max-width:600px;margin:auto;background:#1c2323;border:2px solid #3a4646;padding:24px;border-radius:10px;">

      <div style="border-bottom:2px solid #3a4646;padding-bottom:14px;margin-bottom:20px;">
        <p style="margin:0;color:#f39120;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:bold;">
          // Incoming Transmission
        </p>
        <h2 style="margin:6px 0 0 0;color:#e2dac2;font-size:20px;letter-spacing:-0.5px;">
          New Contact Message
        </h2>
      </div>

      <div style="margin-bottom:14px;">
        <p style="margin:0;color:#6b7878;font-size:10px;letter-spacing:2px;">NAME</p>
        <p style="margin:4px 0 0 0;font-size:14px;color:#e2dac2;font-weight:bold;">
          ${name}
        </p>
      </div>

      <div style="margin-bottom:14px;">
        <p style="margin:0;color:#6b7878;font-size:10px;letter-spacing:2px;">EMAIL</p>
        <p style="margin:4px 0 0 0;font-size:14px;color:#4fbbbc;">
          ${email}
        </p>
      </div>

      <div style="margin-bottom:16px;">
        <p style="margin:0;color:#6b7878;font-size:10px;letter-spacing:2px;">SUBJECT</p>
        <p style="margin:4px 0 0 0;font-size:14px;color:#e2dac2;">
          ${subject || "No subject"}
        </p>
      </div>

      <hr style="border:none;border-top:1px solid #2b3535;margin:20px 0;" />

      <div>
        <p style="margin:0;color:#6b7878;font-size:10px;letter-spacing:2px;">MESSAGE</p>
        <div style="margin-top:8px;padding:14px;background:#111616;border-left:4px solid #ec4624;border-radius:4px;font-size:14px;line-height:1.7;color:#e2dac2;">
          ${message}
        </div>
      </div>

      <div style="margin-top:25px;font-size:10px;color:#4d5a5a;text-align:center;letter-spacing:1px;">
        SENT FROM YOUR PORTFOLIO CONTACT FORM
      </div>

    </div>
  </div>
  `,
    });
    
    if (error) {
      console.error("Resend rejected the message:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send message",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact form request failed:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message",
      },
      { status: 500 },
    );
  }
}
