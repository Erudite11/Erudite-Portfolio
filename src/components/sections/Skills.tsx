import { skills } from "@/lib/data";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { Icons } from "@/components/ui/Icons";
import type { SVGProps, ReactElement } from "react";

const iconMap: Record<string, { icon: (p: SVGProps<SVGSVGElement>) => ReactElement; color: string }> = {
  TypeScript: { icon: Icons.ts, color: "#3178C6" },
  JavaScript: { icon: Icons.js, color: "#F7DF1E" },
  HTML: { icon: Icons.html, color: "#E34F26" },
  CSS: { icon: Icons.css, color: "#1572B6" },
  SQL: { icon: Icons.sql, color: "#4479A1" },
  React: { icon: Icons.react, color: "#61DAFB" },
  "Next.js": { icon: Icons.next, color: "#FFFFFF" },
  "Node.js": { icon: Icons.node, color: "#339933" },
  Express: { icon: Icons.express, color: "#FFFFFF" },
  "Tailwind CSS": { icon: Icons.tailwind, color: "#06B6D4" },
  Git: { icon: Icons.git, color: "#F05032" },
  Docker: { icon: Icons.docker, color: "#2496ED" },
  Vercel: { icon: Icons.vercel, color: "#FFFFFF" },
  PostgreSQL: { icon: Icons.postgres, color: "#4169E1" },
  MongoDB: { icon: Icons.mongo, color: "#47A248" },
  Cloudinary: { icon: Icons.cloudinary, color: "#3448C5" },
  Supabase: { icon: Icons.supabase, color: "#3FCF8E" },
};

const categoryIcons: Record<string, { icon: (p: SVGProps<SVGSVGElement>) => ReactElement; color: string }> = {
  Languages: { icon: Icons.ts, color: "#3178C6" },
  Frameworks: { icon: Icons.react, color: "#61DAFB" },
  Tools: { icon: Icons.git, color: "#F05032" },
};

const Group = ({ title, items, delay = 0 }: { title: string; items: string[]; delay?: number }) => {
  const categoryIcon = categoryIcons[title];
  return (
    <Reveal delay={delay}>
      <div className="group relative h-full rounded-2xl border border-border/50 bg-surface/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-surface/50 hover:shadow-lg hover:shadow-accent/5">
        {/* Category icon */}
        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-accent/20 to-accent-soft/20 border border-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 md:mx-auto">
          {categoryIcon && (() => { const Icon = categoryIcon.icon; return <Icon className="h-6 w-6" style={{ color: categoryIcon.color }} />; })()}
        </div>
        
        <h3 className="text-lg font-semibold text-text-primary mb-4 md:text-center">
          {title}
        </h3>
        
        <ul className="flex flex-wrap gap-2 md:flex-col md:space-y-2 md:gap-0">
          {items.map((i) => {
            const iconData = iconMap[i];
            return (
              <li 
                key={i} 
                className="flex items-center gap-2 rounded-lg bg-background/50 border border-border/30 px-3 py-2 text-sm text-text-secondary hover:border-accent/30 hover:text-text-primary transition-all duration-200 md:w-full md:px-4 md:py-2.5 md:gap-3"
              >
                {iconData && (() => { const Icon = iconData.icon; return <Icon className="h-4 w-4 shrink-0" style={{ color: iconData.color }} />; })()}
                <span>{i}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Reveal>
  );
};

export default function Skills() {
  const skillCategories = [
    { title: "Languages", items: skills.languages },
    { title: "Frameworks", items: skills.frameworks },
    { title: "Tools", items: skills.tools },
  ];

  return (
    <section id="skills" aria-label="Skills" className="py-12 sm:py-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Skills & <span className="bg-linear-to-r from-accent to-accent-soft bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Focused toolkit for building reliable, accessible interfaces.
            </p>
          </div>
        </Reveal>
        
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Group key={cat.title} title={cat.title} items={cat.items} delay={i * 100} />
          ))}
        </div>
      </Container>
    </section>
  );
}
