import Icon from "@/components/atoms/Icon";
import { SocialLink } from "@/types/cv";

export default function SocialIconLink({ icon, label, url }: SocialLink) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="flex h-10 w-10 items-center justify-center border border-ink/10 text-muted transition-colors hover:border-amber hover:text-amber"
    >
      <Icon name={icon} className="h-5 w-5" strokeWidth={1.5} />
    </a>
  );
}
