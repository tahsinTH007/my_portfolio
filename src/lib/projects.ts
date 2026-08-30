export type Variant = "iron" | "aqua" | "rust" | "cream" | "heat";

export type StackGroup = { label: string; items: string[] };

export type Screenshot = { src: string; alt: string; caption?: string };

export type Project = {
  slug: string;
  ref: string;
  title: string;
  tagline: string;
  status: string;
  description: string;
  /** Feature list — kept in sync with `description`. */
  highlights: string[];
  stack: StackGroup[];
  github: string;
  /** Deployed instance, when there is one. Omit rather than linking a stub. */
  demo?: string;
  variant: Variant;
  /**
   * Drop screenshots in /public/projects/<slug>/ and list them here — the
   * detail page renders a gallery, and falls back to a placeholder when empty.
   */
  screenshots: Screenshot[];
  /**
   * Optional engineering write-up. This is the part worth adding by hand:
   * why you chose an approach, what broke, what you'd do differently.
   */
  notes?: { heading: string; body: string }[];
};

/** Flat list of every technology in a project, for tags and metadata. */
export const flatStack = (p: Project) => p.stack.flatMap((g) => g.items);

export const projects: Project[] = [
  {
    slug: "food-delivery-app",
    ref: "PRJ-01",
    title: "Food Delivery App",
    tagline:
      "Real-time food delivery system with microservices & live tracking",
    status: "Completed",
    description:
      "A full-scale food delivery system built using microservices architecture, similar to production platforms like Online Food Delivery App. Includes real-time order tracking, live rider location updates, role-based dashboards (Customer, Restaurant, Rider, Admin), and sound notifications.",
    highlights: [
      "Microservices architecture",
      "Real-time order tracking",
      "Live rider location updates",
      "Role-based dashboards — Customer, Restaurant, Rider, Admin",
      "Sound notifications for incoming orders",
      "Dual payment integration (Stripe & Razorpay)",
    ],
    stack: [
      { label: "Backend", items: ["Node.js", "Express.js"] },
      { label: "Data", items: ["MongoDB"] },
      { label: "Realtime & Messaging", items: ["Socket.IO", "RabbitMQ"] },
      { label: "Payments", items: ["Stripe", "Razorpay"] },
      { label: "Infrastructure", items: ["Docker", "AWS"] },
    ],
    github:
      "https://github.com/tahsinTH007/Pumpkin---online-food-delivery-service-",
    variant: "iron",
    screenshots: [],
  },
  {
    slug: "mern-ecommerce",
    ref: "PRJ-02",
    title: "MERN E-Commerce Platform",
    tagline: "Full-stack production-style e-commerce system",
    status: "Completed",
    description:
      "A complete full-stack e-commerce application with authentication, product management, cart, wishlist, orders, coupons, admin dashboard, and checkout flow. Built with scalable architecture and modern UI design.",
    highlights: [
      "Authentication & session handling",
      "Product management",
      "Cart and wishlist",
      "Orders and checkout flow",
      "Coupon / discount system",
      "Admin dashboard",
    ],
    stack: [
      {
        label: "Frontend",
        items: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      },
      { label: "Backend", items: ["Node.js", "Express.js"] },
      { label: "Data", items: ["MongoDB"] },
    ],
    github: "https://github.com/tahsinTH007/E-commerce",
    variant: "heat",
    screenshots: [],
  },
  {
    slug: "hospital-management-system",
    ref: "PRJ-03",
    title: "AI Hospital Management System",
    tagline: "Real-time healthcare system with AI + automation",
    status: "Completed",
    description:
      "A production-level hospital management system with AI-powered patient admission, real-time notifications, lab results, billing, and telemedicine features. Includes authentication, role-based access, and scalable backend workflows.",
    highlights: [
      "AI-assisted patient admission",
      "Real-time notifications",
      "Lab results management",
      "Billing module",
      "Telemedicine features",
      "Authentication with role-based access control",
      "Background workflows for long-running jobs",
    ],
    stack: [
      { label: "Frontend", items: ["Next.js", "ShadCN UI", "Tailwind CSS"] },
      { label: "Backend", items: ["Node.js", "Express"] },
      { label: "Data", items: ["MongoDB"] },
      { label: "Realtime", items: ["Socket.IO"] },
      { label: "AI & Workflows", items: ["Gemini AI", "Inngest"] },
      { label: "Auth", items: ["Better Auth"] },
    ],
    github: "https://github.com/tahsinTH007/Hospital-Management-System",
    variant: "cream",
    screenshots: [],
  },
  {
    slug: "smart-fire-alert-system",
    ref: "PRJ-04",
    title: "SFAS-BD Smart Fire Alert",
    tagline: "Real-time fire detection & alert system",
    status: "Completed",
    description:
      "An intelligent fire detection system that uses computer vision and AI models to detect fire or smoke in real-time from camera feeds. Generates instant alerts and can be integrated with IoT devices for emergency response systems.",
    highlights: [
      "Computer-vision fire and smoke detection",
      "Real-time alerting from live camera feeds",
      "IoT device integration for emergency response",
      "Redis-backed caching",
      "Rate-limited API surface",
    ],
    stack: [
      { label: "Frontend", items: ["Next.js", "ShadCN UI"] },
      { label: "Backend", items: ["Node.js", "Express.js"] },
      { label: "Data", items: ["MongoDB", "Redis"] },
      { label: "Realtime", items: ["Socket.IO"] },
      { label: "Hardening", items: ["Rate limiter"] },
    ],
    github:
      "https://github.com/tahsinTH007/SFAS-BD-Smart-Fire-Alert-System-Bangladesh",
    variant: "aqua",
    screenshots: [],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

/** Previous / next for the detail-page pager. Wraps around. */
export const getAdjacent = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
};

/** Dark-surfaced panels need light text; colour-surfaced panels need dark. */
export const isDarkVariant = (v: Variant) => v === "iron" || v === "rust";
