import Image from "next/image";

export function Avatar({ name, src, size = 72 }: { name: string; src?: string; size?: number }) {
  const initials = name
    .replace(/\(.*\)/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");

  return (
    <div className="relative inline-flex items-center justify-center rounded-full border border-border bg-surface" style={{ width: size, height: size }}>
      {src ? (
        <Image
          src={src}
          alt={name}
          width={size}
          height={size}
          className="rounded-full object-cover"
        />
      ) : (
        <span className="text-text-primary/80 text-xl" aria-hidden>
          {initials || "?"}
        </span>
      )}
      <span className="sr-only">{name}</span>
    </div>
  );
}
