import { about, personalInfo } from "@/lib/data";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" aria-label="About" className="py-12 sm:py-16 relative">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - heading and decorative element */}
          <Reveal>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                Passionate about crafting{" "}
                <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
                  digital experiences
                </span>
              </h2>
              
              {/* Stats or highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 rounded-xl bg-surface/50 border border-border/50">
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <div className="text-sm text-text-muted">Years Experience</div>
                </div>
                <div className="p-4 rounded-xl bg-surface/50 border border-border/50">
                  <div className="text-2xl font-bold text-accent">20+</div>
                  <div className="text-sm text-text-muted">Projects Delivered</div>
                </div>
              </div>
            </div>
          </Reveal>
          
          {/* Right side - content */}
          <Reveal delay={100}>
            <div className="relative">
              {/* Decorative gradient */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 to-accent-soft/10 rounded-3xl blur-2xl -z-10" />
              
              <div className="relative rounded-2xl border border-border/50 bg-surface/50 p-8 backdrop-blur-sm">
                <div className="space-y-6 text-text-secondary leading-relaxed">
                  <p>{about.summary}</p>
                  <p>{about.approach}</p>
                </div>
                
                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-border/30 flex flex-wrap gap-4">
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center px-5 py-2.5 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-all duration-300 text-sm"
                  >
                    Let&apos;s Connect
                  </a>
                  <a 
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-surface/50 text-text-primary font-medium hover:border-accent hover:text-accent transition-all duration-300 text-sm"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 .5A12 12 0 000 12.6c0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.7-.3-5.6-1.4-5.6-6.3 0-1.4.5-2.5 1.2-3.5-.1-.3-.5-1.7.1-3.6 0 0 1-.3 3.5 1.3a12.2 12.2 0 016.3 0c2.5-1.6 3.5-1.3 3.5-1.3.6 1.9.2 3.3.1 3.6.8 1 .1 2.1.1 3.5 0 5-2.9 6-5.6 6.3.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0024 12.6 12 12 0 0012 .5z" /></svg>
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
