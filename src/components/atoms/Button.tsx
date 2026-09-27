import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-blueprint text-paper hover:bg-blueprint-light border border-blueprint",
  ghost:
    "bg-transparent text-ink border border-ink/20 hover:border-amber hover:text-amber",
};

// Átomo reutilizado por el diálogo de perfil y por cada tarjeta de
// proyecto ("Saber más"), entre otros lugares.
export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-sm px-4 py-2 text-sm font-medium transition-colors duration-150 ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
