import Icon from "@/components/atoms/Icon";
import { Knowledge } from "@/types/cv";

export default function KnowledgeCard({ title, description, icon }: Knowledge) {
  return (
    <div className="relative flex flex-col items-center border border-ink/10 bg-white p-5 text-center transition-opacity duration-200 group-has-[:hover]/knowledge:opacity-40 hover:!opacity-100">
      <span className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-amber" />
      <span className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-amber" />
      <Icon name={icon} className="mb-3 h-9 w-9 text-teal" strokeWidth={1.5} />
      <h3 className="font-display text-lg text-ink">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}