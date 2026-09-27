import { Knowledge } from "@/types/cv";
import KnowledgeCard from "@/components/molecules/KnowledgeCard";

interface Props {
  knowledge: Knowledge[];
}

export default function KnowledgeSection({ knowledge }: Props) {
  return (
    <section id="conocimientos">
      <h2 className="font-display text-2xl text-ink">Conocimientos</h2>
      <div className="group/knowledge mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {knowledge.map((item) => (
          <KnowledgeCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
