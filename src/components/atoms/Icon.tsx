import {
  Code2,
  BrainCircuit,
  ShieldCheck,
  KanbanSquare,
  Database,
  Cpu,
  Github,
  Linkedin,
  Mail,
  X,
  ExternalLink,
  Film,
  ChefHat,
  Mountain,
  Music,
  ChevronLeft,
  ChevronRight,
  type LucideProps,
} from "lucide-react";

const ICONS = {
  Code2,
  BrainCircuit,
  ShieldCheck,
  KanbanSquare,
  Database,
  Cpu,
  Github,
  Linkedin,
  Mail,
  X,
  ExternalLink,
  Film,
  ChefHat,
  Mountain,
  Music,
  ChevronLeft,
  ChevronRight,
} as const;

export type IconName = keyof typeof ICONS;

interface IconProps extends LucideProps {
  // Acepta cualquier string (tal como viene de cv-data.ts) y valida
  // internamente contra el registro; si el nombre no existe, no renderiza nada.
  name: IconName | string;
}

export default function Icon({ name, ...props }: IconProps) {
  const Component = ICONS[name as IconName];
  if (!Component) return null;
  return <Component {...props} />;
}
