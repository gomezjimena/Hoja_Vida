"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types/cv";
import Button from "@/components/atoms/Button";
import Modal from "@/components/molecules/Modal";
import Icon from "@/components/atoms/Icon";

// Tarjeta de proyecto usada dentro del scroll horizontal del portafolio.
// Cada tarjeta administra su propio diálogo "Saber más".
export default function ProjectCard({
  title,
  shortDescription,
  description,
  imageUrl,
  githubUrl,
}: Project) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="flex w-72 shrink-0 flex-col overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm">
  <div className="relative h-44 w-full border-b-2 border-amber">
    <Image src={imageUrl} alt={title} fill className="object-cover" />
  </div>
  <div className="flex flex-1 flex-col p-4">
    <h3 className="font-display text-base text-ink">{title}</h3>
    <p className="mt-1 flex-1 text-sm leading-relaxed text-muted">
      {shortDescription}
    </p>
    <Button
      variant="ghost"
      className="mt-4 self-start"
      onClick={() => setOpen(true)}
    >
      Saber más
    </Button>
  </div>
</article>

      <Modal open={open} onClose={() => setOpen(false)} title={title}>
        <p>{description}</p>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 font-medium text-teal hover:underline"
          >
            <Icon name="Github" className="h-4 w-4" />
            Ver código en GitHub
          </a>
        )}
      </Modal>
    </>
  );
}
