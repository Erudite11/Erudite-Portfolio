import { about, personalInfo } from "@/lib/data";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" aria-label="About" className="py-16 sm:py-20 relative">
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
                    className="inline-flex items-center px-5 py-2.5 rounded-full border border-border bg-surface/50 text-text-primary font-medium hover:border-accent hover:text-accent transition-all duration-300 text-sm"
                  >
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
