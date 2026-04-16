"use client";

import { Mail, Send, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/" },
  { icon: FaTwitter, label: "Twitter", href: "https://twitter.com/" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/" },
];

export default function ContactPage() {
  return (
    <div
      className="min-h-screen px-8 py-10"
      style={{
        fontFamily: "'Space Mono', monospace",
        background: "#F5F2EB",
        color: "#1A1A18",
      }}
    >
      {/* Header */}
      <h1
        className="text-5xl leading-none mb-1"
        style={{
          fontFamily: "'DM Serif Display', serif",
          letterSpacing: "-1px",
        }}
      >
        Contact.
      </h1>
      <p
        className="text-[11px] tracking-[0.12em] uppercase mb-8"
        style={{ color: "#7A7065" }}
      >
        // get in touch — response within 24–48 hrs
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Direct Contact */}
        <div
          className="border-2 border-[#1A1A18] p-6"
          style={{ background: "#FDFAF4" }}
        >
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase mb-5">
            <Mail size={13} />
            Direct Contact
          </div>
          <div className="flex flex-col gap-2 mb-5">
            <div
              className="flex items-center gap-3 text-[12px] px-3 py-2.5 border-2 border-[#1A1A18]"
              style={{ background: "#F5F2EB" }}
            >
              <Mail size={13} />
              tahsin.hassan007@gmail.com
            </div>
            <div
              className="flex items-center gap-3 text-[12px] px-3 py-2.5 border-2 border-[#1A1A18]"
              style={{ background: "#F5F2EB" }}
            >
              <Phone size={13} />
              Available on request
            </div>
          </div>
          <hr className="border-t border-[#1A1A18] opacity-10 mb-3" />
          <p
            className="text-[10px] tracking-[0.08em]"
            style={{ color: "#7A7065" }}
          >
            &gt;&gt; PGP key available on request
          </p>
        </div>

        {/* Social */}
        <div
          className="border-2 border-[#1A1A18] p-6"
          style={{ background: "#1A1A18", color: "#F5F2EB" }}
        >
          <div
            className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase mb-5"
            style={{ color: "#F0C84A" }}
          >
            <span className="w-3 h-3 rounded-full border border-[#F0C84A] inline-block" />
            Network
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[11px] px-3.5 py-2.5 border-2 tracking-[0.05em] transition-colors duration-150 no-underline"
                style={{
                  background: "#2A2A26",
                  color: "#F5F2EB",
                  borderColor: "#444440",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "#F0C84A";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#1A1A18";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "#2A2A26";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#F5F2EB";
                }}
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Message Form */}
        <div
          className="border-2 border-[#1A1A18] p-6 md:col-span-2"
          style={{ background: "#F0C84A" }}
        >
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase mb-5">
            <Send size={13} />
            Send a Message
          </div>

          <div className="grid md:grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="border-2 border-[#1A1A18] px-3 py-2.5 text-[11px] tracking-[0.05em] outline-none transition-all"
              style={{
                fontFamily: "'Space Mono', monospace",
                background: "#F5F2EB",
                color: "#1A1A18",
              }}
              onFocus={(e) => {
                e.target.style.background = "#fff";
                e.target.style.boxShadow = "3px 3px 0 #1A1A18";
              }}
              onBlur={(e) => {
                e.target.style.background = "#F5F2EB";
                e.target.style.boxShadow = "none";
              }}
            />
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="border-2 border-[#1A1A18] px-3 py-2.5 text-[11px] tracking-[0.05em] outline-none transition-all"
              style={{
                fontFamily: "'Space Mono', monospace",
                background: "#F5F2EB",
                color: "#1A1A18",
              }}
              onFocus={(e) => {
                e.target.style.background = "#fff";
                e.target.style.boxShadow = "3px 3px 0 #1A1A18";
              }}
              onBlur={(e) => {
                e.target.style.background = "#F5F2EB";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <input
            type="text"
            placeholder="SUBJECT"
            className="w-full border-2 border-[#1A1A18] px-3 py-2.5 text-[11px] tracking-[0.05em] outline-none mb-3 transition-all"
            style={{
              fontFamily: "'Space Mono', monospace",
              background: "#F5F2EB",
              color: "#1A1A18",
            }}
            onFocus={(e) => {
              e.target.style.background = "#fff";
              e.target.style.boxShadow = "3px 3px 0 #1A1A18";
            }}
            onBlur={(e) => {
              e.target.style.background = "#F5F2EB";
              e.target.style.boxShadow = "none";
            }}
          />

          <textarea
            placeholder="YOUR MESSAGE..."
            rows={5}
            className="w-full border-2 border-[#1A1A18] px-3 py-2.5 text-[11px] tracking-[0.05em] outline-none resize-y mb-4 transition-all"
            style={{
              fontFamily: "'Space Mono', monospace",
              background: "#F5F2EB",
              color: "#1A1A18",
            }}
            onFocus={(e) => {
              e.target.style.background = "#fff";
              e.target.style.boxShadow = "3px 3px 0 #1A1A18";
            }}
            onBlur={(e) => {
              e.target.style.background = "#F5F2EB";
              e.target.style.boxShadow = "none";
            }}
          />

          <div className="flex items-center justify-between flex-wrap gap-3">
            <button
              className="flex items-center gap-2 px-6 py-3 text-[11px] font-bold tracking-[0.12em] uppercase border-2 border-[#1A1A18] transition-colors duration-150"
              style={{
                background: "#1A1A18",
                color: "#F0C84A",
                fontFamily: "'Space Mono', monospace",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#F5F2EB";
                (e.currentTarget as HTMLButtonElement).style.color = "#1A1A18";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#1A1A18";
                (e.currentTarget as HTMLButtonElement).style.color = "#F0C84A";
              }}
            >
              <Send size={12} />
              Transmit
            </button>
            <p
              className="text-[10px] tracking-[0.08em]"
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
