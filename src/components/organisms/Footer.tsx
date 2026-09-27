interface Props {
  name: string;
}

export default function Footer({ name }: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-4 border-t border-ink/10 pt-6 text-xs text-muted">
      <p>
        {name} — hecho con Next.js, TypeScript y Tailwind CSS. © {year}.
      </p>
    </footer>
  );
}
