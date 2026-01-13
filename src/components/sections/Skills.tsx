import { skills } from "@/lib/data";
import { Container, SectionHeading, Card } from "@/components/ui";
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

const Group = ({ title, items, delay = 0 }: { title: string; items: string[]; delay?: number }) => (
  <Reveal delay={delay}>
    <Card>
      <h3 className="text-base font-semibold text-text-primary">
        <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
          {title}
        </span>
      </h3>
      <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-text-secondary sm:grid-cols-3">
        {items.map((i) => {
          const Icon = iconMap[i];
          return (
            <li key={i} className="flex h-10 items-center gap-2 rounded-md border border-border/60 bg-surface px-3 py-2 whitespace-nowrap">
              {Icon ? <Icon className="h-4 w-4 text-text-muted" /> : null}
              <span className="truncate">{i}</span>
            </li>
          );
        })}
      </ul>
    </Card>
  </Reveal>
);

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="py-20 sm:py-24 border-t border-border/60">
      <Container>
        <SectionHeading title="Skills" subtitle="Focused toolkit for building reliable, accessible interfaces." />
        <div className="grid gap-8 sm:grid-cols-3">
          <Group title="Languages" items={skills.languages} delay={0} />
          <Group title="Frameworks" items={skills.frameworks} delay={60} />
          <Group title="Tools" items={skills.tools} delay={120} />
        </div>
      </Container>
    </section>
  );
}
