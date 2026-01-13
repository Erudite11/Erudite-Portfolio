type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`
        rounded-xl border border-border bg-surface p-6
        ${hover ? "transition-all duration-200 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
