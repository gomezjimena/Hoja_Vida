"use client";

import { useState } from "react";
import Image from "next/image";
import { Profile } from "@/types/cv";
import Button from "@/components/atoms/Button";
import Modal from "@/components/molecules/Modal";
import Icon from "../atoms/Icon";

interface Props {
  profile: Profile;
}

// Primera sección del contenido central: presenta a la persona y da
// acceso, mediante un diálogo, a una versión más completa de su perfil.
export default function ProfileSection({ profile }: Props) {
  const [open, setOpen] = useState(false);

  return (
   <section id="perfil" className="flex flex-col items-start gap-6 sm:flex-row-reverse sm:items-center sm:justify-between">
  <div className="relative h-48 w-40 shrink-0 sm:h-64 sm:w-52">
    <Image src={profile.photoUrl} alt={profile.name} fill className="object-cover" />
  </div>

  <div className="max-w-md">
    <h2 className="font-display text-3xl text-ink">{profile.name}</h2>
    <p className="mt-2 text-sm leading-relaxed text-muted">
      {profile.shortBio}
    </p>
    <Button className="mt-4" onClick={() => setOpen(true)}>
      Conocer más
    </Button>
  </div>

  <Modal open={open} onClose={() => setOpen(false)} title={profile.name}>
    <p>{profile.fullBio}</p>
    {profile.hobbies.length > 0 && (
  <>
    <p className="mt-4 font-medium text-ink">Fuera de la universidad</p>
    <ul className="mt-2 space-y-2">
      {profile.hobbies.map((hobby) => (
        <li key={hobby.label} className="flex items-center gap-2">
          <Icon name={hobby.icon} className="h-4 w-4 text-teal" strokeWidth={1.5} />
          {hobby.label}
        </li>
      ))}
    </ul>
  </>
)}
  </Modal>
</section>
  );
}
