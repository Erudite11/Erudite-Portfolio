"use client";
import { useInView } from "@/lib/useInView";

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-all duration-500 ease-out will-change-[opacity,transform] motion-reduce:transition-none ${
        inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95"
      }`}
    >
      {children}
    </div>
  );
}
