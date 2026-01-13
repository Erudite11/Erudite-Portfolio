import Image from "next/image";

export function Avatar({ name, src, size = 140 }: { name: string; src?: string; size?: number }) {
  const initials = name
    .replace(/\(.*\)/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");

  return (
    <div 
      className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent via-accent-soft to-accent p-1 shadow-xl shadow-accent/20" 
      style={{ width: size + 8, height: size + 8 }}
    >
      <div className="rounded-full overflow-hidden bg-surface" style={{ width: size, height: size }}>
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
