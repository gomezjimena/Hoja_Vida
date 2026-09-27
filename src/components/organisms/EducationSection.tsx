import { Education } from "@/types/cv";
import EducationCard from "@/components/molecules/EducationCard";

interface Props {
  education: Education[];
}

export default function EducationSection({ education }: Props) {
  return (
    <section id="educacion">
      <h2 className="font-display text-2xl text-ink">Educación</h2>
      <div className="mt-6 space-y-6">
        {education.map((item, index) => (
          <EducationCard
            key={item.institution}
            {...item}
            isLast={index === education.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
