type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer" | "nav";
} & React.HTMLAttributes<HTMLElement>;

export function Container({
  children,
  className = "",
  as: Component = "div",
  ...rest
}: ContainerProps) {
  return (
    <Component className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`} {...rest}>
      {children}
    </Component>
  );
}
