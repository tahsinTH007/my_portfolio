/**
 * Set NEXT_PUBLIC_SITE_URL in .env (and in your Vercel project settings) to the
 * deployed origin — it drives canonical URLs, the sitemap, and OG image paths.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const site = {
  name: "Tahsin Hassan",
  role: "Full-Stack Developer",
  location: "Dhaka, Bangladesh",
  tagline: "Full-stack developer building scalable web applications",
  description:
    "Full-stack developer (MERN + Next.js) building real-time, API-driven web applications. Available for freelance, contract and full-time work.",
  email: "tahsin.hassan007@gmail.com",
  github: "https://github.com/tahsinTH007",
  linkedin: "https://www.linkedin.com/in/tahsin-hassan-44a7b5291/",
} as const;
