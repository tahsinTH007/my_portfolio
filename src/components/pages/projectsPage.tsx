"use client";

import { Layers, Star, GitFork, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Food Delivery App",
    tagline:
      "Real-time food delivery system with microservices & live tracking",
    status: "Completed",
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "RabbitMQ",
      "Docker",
      "AWS",
      "Stripe",
      "Razorpay",
    ],
    description:
      "A full-scale food delivery system built using microservices architecture, similar to production platforms like Online Food Delivery App. Includes real-time order tracking, live rider location updates, role-based dashboards (Customer, Restaurant, Rider, Admin), and sound notifications.",
    stars: 0,
    forks: 0,
    github:
      "https://github.com/tahsinTH007/Pumpkin---online-food-delivery-service-",
    bg: "#1A1A18",
    dark: true,
  },

  {
    title: "MERN E-Commerce Platform",
    tagline: "Full-stack production-style e-commerce system",
    status: "Completed",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    description:
      "A complete full-stack e-commerce application with authentication, product management, cart, wishlist, orders, coupons, admin dashboard, and checkout flow. Built with scalable architecture and modern UI design.",
    stars: 0,
    forks: 0,
    github: "https://github.com/tahsinTH007/E-commerce",
    bg: "#F0C84A",
    dark: false,
  },

  {
    title: "AI-Powered Hospital Management System",
    tagline: "Real-time healthcare system with AI + automation",
    status: "Completed",
    stack: [
      "MERN Stack",
      "Socket.IO",
      "Gemini AI",
      "Inngest",
      "Better Auth",
      "ShadCN UI",
      "Tailwind CSS",
    ],
    description:
      "A production-level hospital management system with AI-powered patient admission, real-time notifications, lab results, billing, and telemedicine features. Includes authentication, role-based access, and scalable backend workflows.",
    stars: 0,
    forks: 0,
    github: "https://github.com/tahsinTH007/Hospital-Management-System",
    demo: "https://",
    bg: "#FDFAF4",
    dark: false,
  },

  {
    title: "SFAS-BD-Smart-Fire-Alert-System-Bangladesh",
    tagline: "Real-time fire detection & alert system",
    status: "Completed",
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Next.js",
      "ShadCN UI",
      "Socket.IO",
      "Redis",
      "Ratelimiter",
      "IoT (optional)",
    ],
    description:
      "An intelligent fire detection system that uses computer vision and AI models to detect fire or smoke in real-time from camera feeds. Generates instant alerts and can be integrated with IoT devices for emergency response systems.",
    stars: 0,
    forks: 0,
    github:
      "https://github.com/tahsinTH007/SFAS-BD-Smart-Fire-Alert-System-Bangladesh",
    demo: "https://",
    bg: "#D6E8D0",
    dark: false,
  },
];

function StatusBadge({ label, dark }: { label: string; dark: boolean }) {
  return (
    <span
      className="text-[9px] font-bold tracking-[0.14em] uppercase px-2 py-1 border"
      style={{
        borderColor: dark ? "#F0C84A44" : "#1A1A1844",
        color: dark ? "#F0C84A" : "#5A5048",
      }}
    >
      {label}
    </span>
  );
}

function Tag({ label, dark }: { label: string; dark: boolean }) {
  return (
    <span
      className="text-[10px] px-2 py-1 border tracking-[0.04em] cursor-default transition-all duration-150"
      style={{
        borderColor: dark ? "#3A3A36" : "#C8C4BC",
        color: dark ? "#7A7A72" : "#5A5048",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLSpanElement;
        el.style.background = "#F0C84A";
        el.style.color = "#1A1A18";
        el.style.borderColor = "#F0C84A";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLSpanElement;
        el.style.background = "transparent";
        el.style.color = dark ? "#7A7A72" : "#5A5048";
        el.style.borderColor = dark ? "#3A3A36" : "#C8C4BC";
      }}
    >
      {label}
    </span>
  );
}

export default function ProjectsPage() {
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
          // things i've built
        </p>
        <h1
          className="text-[clamp(2.5rem,6vw,4.5rem)] leading-none"
          style={{
            fontFamily: "'DM Serif Display', serif",
            letterSpacing: "-2px",
          }}
        >
          Projects.
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="border border-[#1A1A18] p-6 flex flex-col transition-all duration-200"
            style={{ background: proj.bg }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = "translate(-2px,-3px)";
              el.style.boxShadow = "4px 5px 0 #1A1A18";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = "translate(0,0)";
              el.style.boxShadow = "none";
            }}
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase">
                <Layers
                  size={11}
                  style={{ color: proj.dark ? "#F0C84A" : "#7A7065" }}
                />
                <span style={{ color: proj.dark ? "#6A6A62" : "#A09890" }}>
                  Project
                </span>
              </div>
              <StatusBadge label={proj.status} dark={proj.dark} />
            </div>
            <div
              className="text-[20px] leading-tight mb-1"
              style={{
                fontFamily: "'DM Serif Display', serif",
                color: proj.dark ? "#F5F2EB" : "#1A1A18",
              }}
            >
              {proj.title}
            </div>
            <div
              className="text-[11px] tracking-[0.03em] mb-3"
              style={{ color: proj.dark ? "#6A6A62" : "#7A7065" }}
            >
              {proj.tagline}
            </div>
            <p
              className="text-[11px] leading-[1.8] mb-4 flex-1"
              style={{ color: proj.dark ? "#9A9590" : "#3A3530" }}
            >
              {proj.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {proj.stack.map((t) => (
                <Tag key={t} label={t} dark={proj.dark} />
              ))}
            </div>
            <div
              className="flex items-center justify-between flex-wrap gap-2 pt-3"
              style={{
                borderTop: `1px solid ${proj.dark ? "rgba(255,255,255,0.06)" : "rgba(26,26,24,0.08)"}`,
              }}
            >
              <div
                className="flex items-center gap-3 text-[10px]"
                style={{ color: proj.dark ? "#4A4A46" : "#A09890" }}
              >
                <span className="flex items-center gap-1">
                  <Star size={10} /> {proj.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={10} /> {proj.forks}
                </span>
              </div>
              <div className="flex gap-1.5">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[9px] font-bold tracking-widest uppercase px-3 py-2 border no-underline transition-all duration-150"
                  style={{
                    borderColor: proj.dark ? "#F0C84A" : "#1A1A18",
                    background: proj.dark ? "#F0C84A" : "#1A1A18",
                    color: proj.dark ? "#1A1A18" : "#F0C84A",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.opacity =
                      "0.8")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
                  }
                >
                  <FaGithub size={11} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="border-[#1A1A18] mt-6 p-6 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ background: "#F0C84A" }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = "translate(-2px,-3px)";
          el.style.boxShadow = "4px 5px 0 #1A1A18";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = "translate(0,0)";
          el.style.boxShadow = "none";
        }}
      >
        <div>
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] uppercase mb-2">
            Github
          </div>
          <div
            className="text-[24px] leading-tight"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Wanna see more of my work?
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 flex-wrap">
          <a
            href="https://github.com/tahsinTH007?tab=repositories"
            target="_blank"
            className="flex items-center gap-2 px-5 py-2.5 text-[10px] font-bold tracking-[0.12em] uppercase border border-[#1A1A18] no-underline transition-all duration-150"
            style={{
              background: "#1A1A18",
              color: "#F0C84A",
              fontFamily: "'Space Mono', monospace",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#FDFAF4";
              el.style.color = "#1A1A18";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#1A1A18";
              el.style.color = "#F0C84A";
            }}
          >
            <FaGithub size={11} />
            Github <ArrowRight size={11} />
          </a>
        </div>
      </div>
    </div>
  );
}
