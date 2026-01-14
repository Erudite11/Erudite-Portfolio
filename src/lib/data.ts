export const personalInfo = {
  name: "Olaoluwa Oshyioku (Erudite Tech)",
  role: "Frontend Developer",
  tagline: "I build accessible, performant web applications with modern technologies.",
  email: "eruditetechsub@gmail.com",
  github: "https://github.com/Erudite11",
  linkedin: "https://www.linkedin.com/in/olaoluwa-oshiyoku",
  twitter: "https://x.com/DgtErudite",
  whatsapp: "https://wa.me/2348155842434",
  brand: "Erudite.portfolio",
  avatarUrl: "/Erudite.jpg",
};

export const projects: Array<{ id: number; title: string; description: string; techStack: string[]; liveUrl?: string; githubUrl?: string; }> = [
  {
    id: 1,
    title: "NIEEESA Academic Resource Portal",
    description:
      "A centralized academic resource portal built for NIEEESA at Olabisi Onabanjo University. Enables students to quickly select their academic level and access essential course materials, past questions, and PDFs in an organized and efficient way.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "SQLite", "Cloudinary"],
    liveUrl: "https://oou-nieeesa-home.vercel.app/",
    githubUrl: "https://github.com/Erudite11/NIEEESA-OOU-Home",
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
