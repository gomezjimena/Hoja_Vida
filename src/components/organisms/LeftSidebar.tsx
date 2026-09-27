import Image from "next/image";
import { CVData } from "@/types/cv";
import SkillItem from "@/components/molecules/SkillItem";

type Props = Pick<
  CVData,
  "profile" | "contact" | "languages" | "programmingLanguages" | "extraSkills"
>;

// Sidebar izquierdo: se mantiene fijo en pantallas medianas en adelante
// y contiene la información "de referencia rápida" de la persona.
export default function LeftSidebar({
  profile,
  contact,
  languages,
  programmingLanguages,
  extraSkills,
}: Props) {
  return (
    <aside className="w-full shrink-0 bg-blueprint px-6 py-10 text-paper md:sticky md:top-0 md:w-72">
      <div className="animate-[fadeSlideIn_500ms_ease-out] text-center">
  <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-amber">
    <Image
      src={profile.photoUrl}
      alt={profile.name}
      fill
      className="object-cover"
    />
  </div>
  <h1 className="mt-4 font-display text-2xl text-paper">{profile.name}</h1>
  <p className="text-sm text-paper/60">{profile.professionalTitle}</p>
</div>

      <section className="mt-8 space-y-2 border-t border-blueprint-line pt-6 text-sm">
        <p className="text-paper/80">{contact.location}</p>
        <p className="text-paper/80">{contact.email}</p>
        <p className="text-paper/80">{contact.phone}</p>
      </section>

      <section className="mt-8 space-y-3 border-t border-blueprint-line pt-6">
        <h2 className="font-display text-sm text-paper/50">Idiomas</h2>
        {languages.map((lang) => (
          <SkillItem key={lang.name} {...lang} />
        ))}
      </section>

      <section className="mt-8 space-y-3 border-t border-blueprint-line pt-6">
        <h2 className="font-display text-sm text-paper/50">
          Lenguajes de programación
        </h2>
        {programmingLanguages.map((lang) => (
          <SkillItem key={lang.name} {...lang} />
        ))}
      </section>

      <section className="mt-8 space-y-2 border-t border-blueprint-line pt-6">
        <h2 className="font-display text-sm text-paper/50">
          Habilidades adicionales
        </h2>
        <ul className="space-y-1.5 text-sm text-paper/80">
          {extraSkills.map((skill) => (
            <li key={skill} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-amber" />
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
