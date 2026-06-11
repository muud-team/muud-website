import { type ReactNode, type JSX } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function Reveal({ children, className = "", delay, as: Component = "div" }: RevealProps) {
  return (
    <Component
      className={`reveal ${className}`.trim()}
      data-d={delay}
      suppressHydrationWarning
    >
      {children}
    </Component>
  );
}
