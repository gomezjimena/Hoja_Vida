import ProgressBar from "@/components/atoms/ProgressBar";
import { Skill } from "@/types/cv";

// Molécula reutilizada tanto para la lista de "Idiomas" como para
// "Lenguajes de programación": ambas secciones son listas de Skill.
export default function SkillItem({ name, percentage }: Skill) {
  return (
    <div className="space-y-1">
      <div className="flex items-baseline justify-between text-sm">
        <span className="text-paper/90">{name}</span>
        <span className="font-body text-xs text-paper/50">{percentage}%</span>
      </div>
      <ProgressBar percentage={percentage} />
    </div>
  );
}
