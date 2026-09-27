import { Education } from "@/types/cv";

export default function EducationCard({
  institution,
  date,
  title,
  description,
  isLast = false,
}: Education & { isLast?: boolean }) {
  return (
    <div className="relative pl-8">
      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-teal bg-paper" />
      {!isLast && (
        <span className="absolute left-[4.5px] top-4 h-[calc(100%+1.5rem)] w-px bg-ink/15" />
      )}
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-[minmax(0,180px)_1fr] sm:gap-6">
        <div>
          <p className="font-medium text-teal">{institution}</p>
          <p className="text-xs text-muted">{date}</p>
        </div>
        <div>
          <h3 className="font-display text-lg text-ink">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}