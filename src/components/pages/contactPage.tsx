"use client";

import { Mail, Send, Phone, ClipboardCopy, Check } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/tahsinTH007" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tahsin-hassan-44a7b5291/",
  },
];

const inputStyle = {
  fontFamily: "'Space Mono', monospace",
  background: "#FDFAF4",
  color: "#1A1A18",
  border: "1px solid #C8C4BC",
  padding: "10px 12px",
  fontSize: "11px",
  letterSpacing: "0.03em",
  outline: "none",
  width: "100%",
  transition: "all 0.15s",
};

export default function ContactPage() {
  const [showPhone, setShowPhone] = useState(false);
  const [loading, setLoading] = useState(false);


  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      console.log("Response:", data);

      if (!res.ok) {
        alert(data.message || "Failed to send");
        return;
      }

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen px-6 py-8"
      style={{
        fontFamily: "'Space Mono', monospace",
        background: "#F5F2EB",
        color: "#1A1A18",
      }}
    >
      <div className="mb-6 pb-6 border-b border-[#1A1A18]/10">
        <p
          className="text-[10px] tracking-[0.2em] uppercase mb-2"
          style={{ color: "#A09890" }}
        >
          // get in touch — response within 24–48 hrs
        </p>
        <h1
          className="text-[clamp(2.5rem,6vw,4.5rem)] leading-none"
          style={{
            fontFamily: "'DM Serif Display', serif",
            letterSpacing: "-2px",
          }}
        >
          Contact.
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {/* Direct */}
        <div
          className="border border-[#1A1A18] p-6 transition-all duration-200"
          style={{ background: "#FDFAF4" }}
        >
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase mb-5 text-black">
            <Mail size={11} /> Direct Contact
          </div>
          <div className="flex flex-col gap-2 mb-5">
            <div
              className="flex items-center justify-between gap-3 text-[11px] px-3 py-2.5 border border-[#C8C4BC] cursor-pointer transition-all duration-150"
              style={{ background: "#F5F2EB" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#1A1A18";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#C8C4BC";
              }}
            >
              <div className="flex items-center gap-3">
                <Mail size={12} style={{ color: "#A09890" }} />
                <span style={{ color: "#3A3530" }}>
                  tahsin.hassan007@gmail.com
                </span>
              </div>
            </div>

            <div
              onClick={() => setShowPhone((prev) => !prev)}
              className="flex items-center justify-between gap-3 text-[11px] px-3 py-2.5 border border-[#C8C4BC] cursor-pointer transition-all duration-150"
              style={{ background: "#F5F2EB" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#1A1A18";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#C8C4BC";
              }}
            >
              <div className="flex items-center gap-3">
                <Phone size={12} style={{ color: "#A09890" }} />{" "}
                <span style={{ color: "#3A3530" }}>
                  {showPhone
                    ? "+8801918271328"
                    : "Click to reveal phone number"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border border-[#1A1A18] p-6"
          style={{ background: "#1A1A18" }}
        >
          <div
            className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase mb-5"
            style={{ color: "#F0C84A" }}
          >
            <span className="w-2 h-2 rounded-full border border-[#F0C84A] inline-block" />{" "}
            Network
          </div>
          <div className="grid grid-cols-1 gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[11px] px-3.5 py-2.5 border no-underline transition-all duration-150 tracking-[0.04em]"
                style={{
                  background: "#1E1E1C",
                  color: "#9A9590",
                  borderColor: "#2A2A26",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#F0C84A";
                  el.style.color = "#1A1A18";
                  el.style.borderColor = "#F0C84A";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#1E1E1C";
                  el.style.color = "#9A9590";
                  el.style.borderColor = "#2A2A26";
                }}
              >
                <Icon size={13} /> {label}
              </a>
            ))}
          </div>
        </div>

        <div
          className="border border-[#1A1A18] p-6 md:col-span-2"
          style={{ background: "#F0C84A" }}
        >
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase mb-5">
            <Send size={11} /> Send a Message
          </div>
          <div className="grid md:grid-cols-2 gap-2.5 mb-2.5">
            <input
              name="name"
              type="text"
              placeholder="YOUR NAME"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => {
                e.target.style.borderColor = "#1A1A18";
                e.target.style.background = "#fff";
                e.target.style.boxShadow = "3px 3px 0 #1A1A18";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#C8C4BC";
                e.target.style.background = "#FDFAF4";
                e.target.style.boxShadow = "none";
              }}
            />
            <input
              name="email"
              type="email"
              placeholder="EMAIL ADDRESS"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => {
                e.target.style.borderColor = "#1A1A18";
                e.target.style.background = "#fff";
                e.target.style.boxShadow = "3px 3px 0 #1A1A18";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#C8C4BC";
                e.target.style.background = "#FDFAF4";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>
          <input
            name="subject"
            type="text"
            placeholder="SUBJECT"
            value={form.subject}
            onChange={handleChange}
            style={{ ...inputStyle, marginBottom: "10px" }}
            onFocus={(e) => {
              e.target.style.borderColor = "#1A1A18";
              e.target.style.background = "#fff";
              e.target.style.boxShadow = "3px 3px 0 #1A1A18";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#C8C4BC";
              e.target.style.background = "#FDFAF4";
              e.target.style.boxShadow = "none";
            }}
          />
          <textarea
            name="message"
            placeholder="YOUR MESSAGE..."
            rows={5}
            onChange={handleChange}
            value={form.message}
            style={{
              ...inputStyle,
              resize: "vertical",
              display: "block",
              marginBottom: "16px",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#1A1A18";
              e.target.style.background = "#fff";
              e.target.style.boxShadow = "3px 3px 0 #1A1A18";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#C8C4BC";
              e.target.style.background = "#FDFAF4";
              e.target.style.boxShadow = "none";
            }}
          />
          <div className="flex items-center justify-between flex-wrap gap-3">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex items-center gap-2 px-5 py-2.5 text-[10px] font-bold tracking-[0.12em] uppercase border border-[#1A1A18] transition-all duration-150"
              style={{
                background: "#1A1A18",
                color: "#F0C84A",
                fontFamily: "'Space Mono', monospace",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "#FDFAF4";
                el.style.color = "#1A1A18";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "#1A1A18";
                el.style.color = "#F0C84A";
              }}
            >
              <Send size={11} /> {loading ? "Sending..." : "Transmit"}
            </button>
            <p
              className="text-[9px] tracking-[0.08em]"
              style={{ color: "#5A4F3A" }}
            >
              &gt;&gt; enc: on &nbsp;|&nbsp; status: ready
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
