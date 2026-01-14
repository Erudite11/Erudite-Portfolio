import { personalInfo } from "@/lib/data";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { Icons } from "@/components/ui/Icons";

const socialLinks = [
  { key: "email", icon: Icons.email, href: `mailto:${personalInfo.email}`, label: "Email" },
  { key: "github", icon: Icons.github, href: personalInfo.github, label: "GitHub" },
  { key: "linkedin", icon: Icons.linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { key: "twitter", icon: Icons.x, href: personalInfo.twitter, label: "X (Twitter)" },
].filter((link) => link.href);

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="py-16 sm:py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-accent/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      <Container>
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Let&apos;s work{" "}
              <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
                together
              </span>
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              Available for senior frontend roles and freelance engagements.
              Prefer email for opportunities and collaboration.
            </p>
          </div>
        </Reveal>
        
        <Reveal delay={100}>
          <div className="mt-12 flex flex-col items-center">
            {/* Email CTA */}
            <a 
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent mask-b-to-accent-hover text-white font-medium text-lg hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-1 transition-all duration-300"
            >
              <Icons.email className="h-5 w-5" />
              {personalInfo.email}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            
            {/* Social links */}
            <div className="mt-10 flex items-center gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.key}
                  href={link.href} 
                  target={link.key === "email" ? undefined : "_blank"}
                  rel={link.key === "email" ? undefined : "noopener noreferrer"}
                  aria-label={link.label}
                  className="group p-4 rounded-xl border border-border/50 bg-surface/30 text-text-muted hover:text-accent hover:border-accent/50 hover:bg-surface/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <link.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            
            {/* Decorative text */}
            <p className="mt-12 text-text-muted text-sm flex items-center">
              Based in Nigeria • Open to remote opportunities worldwide
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
