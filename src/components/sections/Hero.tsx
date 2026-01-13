import { personalInfo } from "@/lib/data";
import { Container } from "@/components/ui";
import { Avatar } from "@/components/ui/Avatar";
import { Icons } from "@/components/ui/Icons";

export default function Hero() {
  const name = personalInfo.name;
  const [main, akaPart] = name.split("(pka");
  const aka = akaPart ? `(pka${akaPart}` : "";

  return (
    <section id="hero" aria-label="Introduction" className="relative overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-soft/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>
      
      <Container as="header" className="py-24 sm:py-32 md:py-40">
        <div className="flex flex-col items-center text-center">
          <Avatar name={name} src={personalInfo.avatarUrl} size={140} />
          
          <div className="mt-8 space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl">
              <span className="block">{main?.trim()}</span>
              {aka && (
                <span className="block mt-2 text-2xl sm:text-3xl font-medium bg-gradient-to-r from-accent via-accent-soft to-accent bg-clip-text text-transparent animate-gradient">
                  {aka.trim()}
                </span>
              )}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-text-secondary">{personalInfo.role}</p>
          </div>
          
          <p className="mt-6 max-w-xl text-text-secondary text-lg leading-relaxed">
            {personalInfo.tagline}
          </p>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              View My Work
              <Icons.arrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-surface/50 text-text-primary font-medium hover:border-accent hover:text-accent transition-all duration-300 backdrop-blur-sm"
            >
              <Icons.email className="h-4 w-4" />
              Get in Touch
            </a>
          </div>
          
          {/* Social links */}
          <div className="mt-10 flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 rounded-full border border-border/50 bg-surface/30 text-text-muted hover:text-accent hover:border-accent/50 transition-all duration-300 backdrop-blur-sm">
              <Icons.github className="h-5 w-5" />
            </a>
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-full border border-border/50 bg-surface/30 text-text-muted hover:text-accent hover:border-accent/50 transition-all duration-300 backdrop-blur-sm">
                <Icons.linkedin className="h-5 w-5" />
              </a>
            )}
            {personalInfo.twitter && (
              <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="p-3 rounded-full border border-border/50 bg-surface/30 text-text-muted hover:text-accent hover:border-accent/50 transition-all duration-300 backdrop-blur-sm">
                <Icons.x className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
