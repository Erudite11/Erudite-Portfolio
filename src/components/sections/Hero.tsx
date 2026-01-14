import { personalInfo } from "@/lib/data";
import { Container } from "@/components/ui";
import { Avatar } from "@/components/ui/Avatar";

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
      
      <Container as="header" className="py-12 sm:py-16 md:py-20">
        <div className="flex flex-col items-center text-center">
          <Avatar name={name} src={personalInfo.avatarUrl} size={140} />
          
          <div className="mt-6 space-y-3">
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
          
          <p className="mt-4 max-w-xl text-text-secondary text-lg leading-relaxed">
            {personalInfo.tagline}
          </p>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 rounded-full border border-border bg-surface/50 text-text-primary font-medium hover:border-accent hover:text-accent transition-all duration-300 backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
