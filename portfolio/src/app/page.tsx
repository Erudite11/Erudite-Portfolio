import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div id="main">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-border/60 py-8 text-center text-sm text-text-muted">
        © {new Date().getFullYear()} Olaoluwa Oshyioku (pka Erudite). <br /> All rights reserved.
      </footer>
    </div>
  );
}
