import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { personalInfo } from "@/lib/data";

export default function Home() {
  return (
    <div id="main" className="relative">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="relative border-t border-border/30 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold bg-linear-to-r from-accent to-accent-soft bg-clip-text text-transparent">
                {personalInfo.brand}
              </span>
            </div>
            <p className="text-sm text-text-muted">
              © {new Date().getFullYear()} Erudite. Built with Next.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
