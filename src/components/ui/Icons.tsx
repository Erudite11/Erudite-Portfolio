export const Icons = {
  arrowDown: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  ),
  email: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  github: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5A12 12 0 000 12.6c0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.7-.3-5.6-1.4-5.6-6.3 0-1.4.5-2.5 1.2-3.5-.1-.3-.5-1.7.1-3.6 0 0 1-.3 3.5 1.3a12.2 12.2 0 016.3 0c2.5-1.6 3.5-1.3 3.5-1.3.6 1.9.2 3.3.1 3.6.8 1 .1 2.1.1 3.5 0 5-2.9 6-5.6 6.3.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0024 12.6 12 12 0 0012 .5z" />
    </svg>
  ),
  linkedin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.6v-5.6c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.7h-3.6V9h3.46v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.64 0 4.31 2.4 4.31 5.51v6.23zM5.34 7.47a2.08 2.08 0 110-4.16 2.08 2.08 0 010 4.16zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  ),
  x: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.6 8.7L23.2 22h-6.5l-5.1-6.6-5.8 6.6H2.7l8.2-9.3L1.4 2h6.7l4.6 6 6.2-6z" />
    </svg>
  ),
  whatsapp: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.38-.01-.58-.01-.2 0-.52.07-.8.38-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35zM12 21.5c-1.78 0-3.44-.47-4.88-1.29l-.35-.21-3.64.95.97-3.54-.23-.36C2.9 15.56 2.5 13.84 2.5 12 2.5 6.75 6.75 2.5 12 2.5S21.5 6.75 21.5 12 17.25 21.5 12 21.5zm0-21C5.38.5.5 5.38.5 12c0 2.12.56 4.11 1.53 5.84L.5 23.5l5.8-1.52A11.45 11.45 0 0012 23.5c6.62 0 12-5.38 12-12S18.62.5 12 .5z"/>
    </svg>
  ),
  // Minimal skill icons (generic)
  ts: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M3 4h18v16H3z"/><path d="M8 8h8M8 12h5M8 16h8"/></svg>
  ),
  js: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M3 3h18v18H3z"/></svg>
  ),
  html: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M3 3h18l-2 18-7 2-7-2-2-18z"/></svg>
  ),
  css: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M3 3h18l-2 18-7 2-7-2z"/></svg>
  ),
  sql: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/></svg>
  ),
  react: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="11" ry="4"/><ellipse cx="12" cy="12" rx="4" ry="11" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="4" ry="11" transform="rotate(120 12 12)"/></svg>
  ),
  next: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2Zm2 14L8 8l8 8Z"/></svg>
  ),
  node: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l9 5v10l-9 5-9-5V7z"/></svg>
  ),
  express: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M4 16l4-8 4 8m4-8v8m4-8l-4 8"/></svg>
  ),
  tailwind: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 6c2.5-3 6-3 8 0-2.5-1-4.5 0-6 2-2.5 3-6 3-8 0 2.5 1 4.5 0 6-2Zm0 6c2.5-3 6-3 8 0-2.5-1-4.5 0-6 2-2.5 3-6 3-8 0 2.5 1 4.5 0 6-2Z"/></svg>
  ),
  git: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l10 10-10 10L2 12 12 2Zm0 5a2 2 0 110 4 2 2 0 010-4Zm0 6a2 2 0 110 4 2 2 0 010-4Z"/></svg>
  ),
  vscode: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M4 12l12-9 4 2v14l-4 2-12-9 6 0z"/></svg>
  ),
  figma: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M10 2a4 4 0 000 8h4V2h-4zm0 10a4 4 0 100 8 4 4 0 000-8zm6-2a4 4 0 000-8h-2v8h2zm-2 2v8a4 4 0 100-8h-2z"/></svg>
  ),
  docker: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M3 14h18a3 3 0 01-3 3H5a2 2 0 01-2-2v-1zm4-8h3v3H7V6zm4 0h3v3h-3V6zm4 0h3v3h-3V6zM7 10h3v3H7v-3zm4 0h3v3h-3v-3z"/></svg>
  ),
  vercel: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 3l9 16H3l9-16z"/></svg>
  ),
  postgres: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v9c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/></svg>
  ),
  mongo: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2s6 5 6 12-6 8-6 8-6-1-6-8 6-12 6-12z"/></svg>
  ),
};
