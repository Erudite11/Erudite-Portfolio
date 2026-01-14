import { projects } from "@/lib/data";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { Icons } from "@/components/ui/Icons";

export default function Projects() {
  const hasProjects = projects.length > 0;
  return (
    <section id="projects" aria-label="Projects" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Featured <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Selected work demonstrating problem-solving, performance, and clarity.
            </p>
          </div>
        </Reveal>
        
        {hasProjects ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <div className="group relative h-full rounded-2xl border border-border/50 bg-surface/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-surface hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
                  {/* Project number badge - desktop only */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-soft hidden md:flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {i + 1}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                    {p.description}
                  </p>
                  
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.techStack.map((t) => (
                      <li key={t} className="rounded-full bg-background/80 border border-border/50 px-3 py-1 text-xs text-text-muted">
                        {t}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-border/30 flex gap-4">
                    {p.liveUrl && (
                      <a 
                        href={p.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-soft transition-colors"
                      >
                        <Icons.arrowDown className="h-4 w-4 -rotate-135" />
                        Live Demo
                      </a>
                    )}
                    {p.githubUrl && (
                      <a 
                        href={p.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                      >
                        <Icons.github className="h-4 w-4" />
                        Code
                      </a>
                    )}
                    {!p.liveUrl && !p.githubUrl && (
                      <span className="text-sm text-text-muted italic">Coming soon</span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="text-center py-16 rounded-2xl border border-border/50 bg-surface/30">
              <p className="text-text-secondary">Projects are being curated. Please check back soon.</p>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
