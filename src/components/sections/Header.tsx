"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, personalInfo } from "@/lib/data";
import { Container, Button } from "@/components/ui";
import { Icons } from "@/components/ui/Icons";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        isScrolled ? "bg-background/80" : "bg-background/40"
      }`}
      role="banner"
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:inset-x-0 focus:top-2 focus:m-2 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2">
        Skip to content
      </a>
      <Container as="nav" className="flex h-14 items-center justify-between" aria-label="Primary">
        <Link href="#" className="text-sm font-semibold text-text-primary">
          {personalInfo.brand || "Erudite.portfolio"}
        </Link>
        <div className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm text-text-secondary hover:text-text-primary transition-colors ${
                pathname === link.href ? "text-accent" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#projects" aria-label="View Projects" className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-text-primary hover:border-accent hover:text-accent transition">
            <Icons.arrowDown className="h-4 w-4" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-text-secondary hover:text-text-primary hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              {open ? (
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6.75c0-.414.336-.75.75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm.75 6a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5H4.5Z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </Container>
      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <Container className="py-3">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface transition-colors ${
                  pathname === link.href ? "text-accent" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
