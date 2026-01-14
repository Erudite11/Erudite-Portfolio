import Image from "next/image";

export function Avatar({ name, src, size = 180 }: { name: string; src?: string; size?: number }) {
  const initials = name
    .replace(/\(.*\)/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");

  return (
    <div 
      className="relative inline-flex items-center justify-center rounded-full" 
      style={{ width: size, height: size }}
    >
      {/* Animated gradient glow effect */}
      <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-accent via-accent-soft to-accent opacity-70 blur-xl animate-pulse-glow -z-10" />
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent to-accent-soft opacity-50 blur-md -z-10" />
      
      <div className="rounded-full overflow-hidden bg-surface ring-2 ring-background/50" style={{ width: size, height: size }}>
        {src ? (
          <Image
            src={src}
            alt={name}
            width={size}
            height={size}
            className="rounded-full object-cover"
            priority
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-text-primary/80 text-3xl font-semibold" aria-hidden>
              {initials || "?"}
            </span>
          </div>
        )}
      </div>
      <span className="sr-only">{name}</span>
    </div>
  );
}
