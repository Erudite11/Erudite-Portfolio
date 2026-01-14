import { skills } from "@/lib/data";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { Icons } from "@/components/ui/Icons";

const iconMap: Record<string, (p: React.SVGProps<SVGSVGElement>) => JSX.Element> = {
  TypeScript: Icons.ts,
  JavaScript: Icons.js,
  HTML: Icons.html,
  CSS: Icons.css,
  SQL: Icons.sql,
  React: Icons.react,
  "Next.js": Icons.next,
  "Node.js": Icons.node,
  Express: Icons.express,
  "Tailwind CSS": Icons.tailwind,
  Git: Icons.git,
  "VS Code": Icons.vscode,
  Figma: Icons.figma,
  Docker: Icons.docker,
  Vercel: Icons.vercel,
  PostgreSQL: Icons.postgres,
  MongoDB: Icons.mongo,
};

const categoryIcons: Record<string, (p: React.SVGProps<SVGSVGElement>) => JSX.Element> = {
  Languages: Icons.ts,
  Frameworks: Icons.react,
  Tools: Icons.git,
};

const Group = ({ title, items, delay = 0, index }: { title: string; items: string[]; delay?: number; index: number }) => {
  const CategoryIcon = categoryIcons[title];
  return (
    <Reveal delay={delay}>
      <div className="group relative h-full rounded-2xl border border-border/50 bg-surface/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-surface/50 hover:shadow-lg hover:shadow-accent/5">
        {/* Category icon */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent-soft/20 border border-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          {CategoryIcon && <CategoryIcon className="h-6 w-6 text-accent" />}
        </div>
        
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          {title}
        </h3>
        
        <ul className="space-y-2">
          {items.map((i) => {
            const Icon = iconMap[i];
            return (
              <li 
                key={i} 
                className="flex items-center gap-3 rounded-lg bg-background/50 border border-border/30 px-4 py-2.5 text-sm text-text-secondary hover:border-accent/30 hover:text-text-primary transition-all duration-200"
              >
                {Icon && <Icon className="h-4 w-4 text-accent/70 flex-shrink-0" />}
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
    <section id="skills" aria-label="Skills" className="py-16 sm:py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Skills & <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Focused toolkit for building reliable, accessible interfaces.
            </p>
          </div>
        </Reveal>
        
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Group key={cat.title} title={cat.title} items={cat.items} delay={i * 100} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
