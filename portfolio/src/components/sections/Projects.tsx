import { projects } from "@/lib/data";
import { Container, SectionHeading, Card, Button } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";

export default function Projects() {
  const hasProjects = projects.length > 0;
  return (
    <section id="projects" aria-label="Projects" className="py-20 sm:py-24">
      <Container>
        <SectionHeading title="Projects" subtitle="Selected work demonstrating problem-solving, performance, and clarity." />
        {hasProjects ? (
          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <Card>
                  <h3 className="text-lg font-semibold text-text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{p.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-muted">
                    {p.techStack.map((t) => (
                      <li key={t} className="rounded-full border border-border px-2 py-1">{t}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    {p.liveUrl && (
                      <Button as="a" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </Button>
                    )}
                    {p.githubUrl && (
                      <Button as="a" href={p.githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                        GitHub
                      </Button>
                    )}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        ) : (
          <Card hover={false}>
            <p className="text-text-secondary">Projects are being curated. Please check back soon.</p>
          </Card>
        )}
      </Container>
    </section>
  );
}
