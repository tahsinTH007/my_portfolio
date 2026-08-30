"use client";

import { Mail, Send, Phone, Check, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PageShell, PageHeader } from "@/components/layout/page-shell";

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/tahsinTH007" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tahsin-hassan-44a7b5291/",
  },
];

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "ok" }
  | { kind: "error"; message: string };

export default function ContactPage() {
  const [showPhone, setShowPhone] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status.kind === "sending") return;

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        kind: "error",
        message: "Name, email and message are required",
      });
      return;
    }

    setStatus({ kind: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({
          kind: "error",
          message: data.message || "Transmission failed",
        });
        return;
      }

      setStatus({ kind: "ok" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus({ kind: "error", message: "Network error — try again" });
    }
  };

  const sending = status.kind === "sending";

  return (
    <PageShell>
      <PageHeader
        index="05"
        kicker="// get in touch — response within 24–48 hrs"
        title="Contact."
        sys="SYS://CONTACT"
      />

      <div className="grid md:grid-cols-2 gap-3">
        {/* Direct */}
        <section className="panel panel--cream p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="label flex items-center gap-2">
              <Mail size={11} /> Direct Contact
            </div>
            <span className="datum text-[9px] text-cream-500">CH-01</span>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="mailto:tahsin.hassan007@gmail.com"
              className="flex items-center gap-3 text-[11px] px-3 py-2.5 border-2 border-iron-950/25 rounded-sm text-iron-800 no-underline transition-colors duration-150 hover:border-iron-950 hover:bg-cream-100"
            >
              <Mail size={12} className="text-rust" />
              tahsin.hassan007@gmail.com
            </a>

            <button
              type="button"
              onClick={() => setShowPhone((prev) => !prev)}
              className="flex items-center gap-3 text-[11px] px-3 py-2.5 border-2 border-iron-950/25 rounded-sm text-iron-800 text-left transition-colors duration-150 hover:border-iron-950 hover:bg-cream-100"
            >
              <Phone size={12} className="text-rust" />
              {showPhone ? "+8801918271328" : "Click to reveal phone number"}
            </button>
          </div>
        </section>

        {/* Network */}
        <section className="panel panel--iron brackets p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="label flex items-center gap-2 text-aqua">
              <span className="w-2 h-2 rounded-full border border-aqua inline-block" />
              Network
            </div>
            <span className="datum text-[9px] text-iron-400">CH-02</span>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[11px] px-3.5 py-2.5 border border-iron-600 rounded-sm bg-iron-900 text-iron-300 no-underline transition-all duration-150 hover:bg-heat hover:border-heat hover:text-iron-950"
              >
                <Icon size={13} /> {label}
              </a>
            ))}
          </div>
        </section>

        {/* Form */}
        <section className="panel panel--heat md:col-span-2 p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="label flex items-center gap-2">
              <Send size={11} /> Send a Message
            </div>
            <span className="datum text-[9px] opacity-60">TX-FORM</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-2.5 mb-2.5">
              <div className="flex flex-col">
                <label htmlFor="cf-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="cf-name"
                  className="field"
                  name="name"
                  type="text"
                  placeholder="YOUR NAME"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="cf-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="cf-email"
                  className="field"
                  name="email"
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label htmlFor="cf-subject" className="sr-only">
              Subject
            </label>
            <input
              id="cf-subject"
              className="field mb-2.5"
              name="subject"
              type="text"
              placeholder="SUBJECT"
              value={form.subject}
              onChange={handleChange}
            />

            <label htmlFor="cf-message" className="sr-only">
              Your message
            </label>
            <textarea
              id="cf-message"
              className="field mb-4 resize-y block"
              name="message"
              placeholder="YOUR MESSAGE..."
              rows={5}
              value={form.message}
              onChange={handleChange}
            />

            <div className="flex items-center justify-between flex-wrap gap-3">
              <button type="submit" disabled={sending} className="btn btn--dark">
                <Send size={11} /> {sending ? "Transmitting..." : "Transmit"}
              </button>

              {/* status readout */}
              <div
                role="status"
                aria-live="polite"
                className="datum text-[9px] flex items-center gap-2"
              >
                {status.kind === "ok" && (
                  <span className="flex items-center gap-1.5 text-iron-950">
                    <Check size={11} /> Message sent — talk soon
                  </span>
                )}
                {status.kind === "error" && (
                  <span className="flex items-center gap-1.5 text-cream-100 bg-rust px-2 py-1 rounded-sm">
                    <AlertTriangle size={11} /> {status.message}
                  </span>
                )}
                {(status.kind === "idle" || sending) && (
                  <span className="opacity-60">
                    &gt;&gt; enc: on | status: {sending ? "sending" : "ready"}
                  </span>
                )}
              </div>
            </div>
          </form>
        </section>
      </div>
    </PageShell>
  );
}
