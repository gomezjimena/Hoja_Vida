import { SocialLink } from "@/types/cv";
import SocialIconLink from "@/components/molecules/SocialIconLink";

interface Props {
  socialLinks: SocialLink[];
}

// Columna angosta y fija con los enlaces a redes sociales.
export default function RightSidebar({ socialLinks }: Props) {
  return (
    <aside className="flex w-full shrink-0 justify-center gap-3 border-t border-ink/10 bg-paper px-4 py-4 md:sticky md:top-0 md:h-screen md:w-20 md:flex-col md:justify-start md:gap-4 md:border-l md:border-t-0 md:py-10">
      {socialLinks.map((link) => (
        <SocialIconLink key={link.label} {...link} />
      ))}
    </aside>
  );
}
