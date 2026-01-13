import { personalInfo } from "@/lib/data";
import { Container, SectionHeading, Card, Button } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { Icons } from "@/components/ui/Icons";

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="py-20 sm:py-24 border-t border-border/60">
      <Container>
        <SectionHeading title="Contact" subtitle="Prefer email for opportunities and collaboration." />
        <Reveal>
          <Card hover={false} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-text-primary">{personalInfo.email}</p>
              <p className="text-sm text-text-secondary mt-1">Available for senior frontend roles and freelance engagements.</p>
            </div>
            <div className="flex gap-3">
              <a aria-label="Email" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-primary hover:border-accent hover:text-accent transition" href={`mailto:${personalInfo.email}`}>
                <Icons.email className="h-5 w-5" />
              </a>
              <a aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-primary hover:border-accent hover:text-accent transition" href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Icons.github className="h-5 w-5" />
              </a>
              {personalInfo.linkedin && (
                <a aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-primary hover:border-accent hover:text-accent transition" href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Icons.linkedin className="h-5 w-5" />
                </a>
              )}
              {personalInfo.twitter && (
                <a aria-label="X (Twitter)" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-primary hover:border-accent hover:text-accent transition" href={personalInfo.twitter} target="_blank" rel="noopener noreferrer">
                  <Icons.x className="h-5 w-5" />
                </a>
              )}
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
