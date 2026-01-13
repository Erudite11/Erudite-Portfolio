export const personalInfo = {
  name: "Olaoluwa Oshyioku (pka Erudite)",
  role: "Frontend Developer",
  tagline: "I build accessible, performant web applications with modern technologies.",
  email: "eruditetechsub@gmail.com",
  github: "https://github.com/Erudite11",
  linkedin: "https://www.linkedin.com/in/olaoluwa-oshiyoku",
  twitter: "https://x.com/DgtErudite",
  brand: "Erudite.portfolio",
  avatarUrl: "https://avatars.githubusercontent.com/u/Erudite11",
};

export const projects: Array<{ id: number; title: string; description: string; techStack: string[]; liveUrl?: string; githubUrl?: string; }> = [
 {
   id: 1,
   title: "Design System & UI Kit",
   description:
     "Accessible component library and tokens powering multiple apps. Built with strict a11y, keyboard navigation, and WCAG AA contrast. Established theming, icons, and composition patterns for rapid delivery.",
   techStack: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "Storybook"],
   githubUrl: undefined,
   liveUrl: undefined,
 },
 {
   id: 2,
   title: "Analytics Dashboard",
   description:
     "High-performance analytics surface with virtualized tables and charts. Implemented caching and background revalidation, reducing median load time by 40% and improving perceived responsiveness.",
   techStack: ["Next.js", "TypeScript", "TanStack Query", "D3.js"],
   githubUrl: undefined,
   liveUrl: undefined,
 },
 {
   id: 3,
   title: "E‑commerce Frontend",
   description:
     "Modern storefront with SSR/ISR, cart and checkout flows, and resilient error handling. Optimized images and code-splitting for a fast, consistent experience across devices.",
   techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
   githubUrl: undefined,
   liveUrl: undefined,
 },
];

export const skills = {
  languages: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL"],
  frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  tools: ["Git", "VS Code", "Figma", "Docker", "Vercel", "PostgreSQL", "MongoDB"],
};

export const about = {
  summary: `Frontend developer with 5+ years of experience building production applications 
for startups and enterprise clients. I focus on writing clean, maintainable code and 
creating interfaces that are both performant and accessible.`,
  approach: `My approach combines technical rigor with user-centered design. I believe 
great frontend engineering means understanding both the code and the people who use it. 
I'm particularly interested in design systems, performance optimization, and accessibility.`,
};

export const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];
