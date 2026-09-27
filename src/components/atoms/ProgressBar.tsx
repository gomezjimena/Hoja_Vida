interface ProgressBarProps {
  percentage: number;
  trackClassName?: string;
  fillClassName?: string;
}

// Barra de progreso simple, sin dependencias externas.
// La usa SkillItem para representar idiomas y lenguajes de programación.
export default function ProgressBar({
  percentage,
  trackClassName = "bg-blueprint-line",
  fillClassName = "bg-amber",
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percentage));
  return (
    <div
      className={`h-1.5 w-full overflow-hidden rounded-full ${trackClassName}`}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`h-full rounded-full ${fillClassName}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
