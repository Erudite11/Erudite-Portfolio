import { personalInfo } from "@/lib/data";
import { Container, Button } from "@/components/ui";
import { Avatar } from "@/components/ui/Avatar";
import { Icons } from "@/components/ui/Icons";

export default function Hero() {
  const name = personalInfo.name;
  const [main, akaPart] = name.split("(pka");
  const aka = akaPart ? `(pka${akaPart}` : "";

  return (
    <section id="hero" aria-label="Introduction" className="border-b border-border/60">
      <Container as="header" className="py-20 sm:py-28">
        <Avatar name={name} src={personalInfo.avatarUrl} size={84} />
        <div className="mt-6 space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {main?.trim()}
            {aka && <span className="block text-text-secondary">{aka.trim()}</span>}
          </h1>
          <p className="text-lg bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">{personalInfo.role}</p>
        </div>
        <p className="mt-6 max-w-2xl text-text-secondary">
          {personalInfo.tagline}
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#projects" aria-label="View Projects" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-primary hover:border-accent hover:text-accent transition">
            <Icons.arrowDown className="h-5 w-5" />
          </a>
          <a href="#contact" aria-label="Contact" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-primary hover:border-accent hover:text-accent transition">
            <Icons.email className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
