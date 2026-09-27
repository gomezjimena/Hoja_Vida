"use client";

import { useRef } from "react";
import { Project } from "@/types/cv";
import ProjectCard from "@/components/molecules/ProjectCard";
import Icon from "@/components/atoms/Icon";

interface Props {
  projects: Project[];
}

export default function PortfolioSection({ projects }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  return (
    <section id="portafolio">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl text-ink">Portafolio</h2>
          <p className="mt-1 text-sm text-muted">
            Algunos de los proyectos en los que he trabajado.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Ver proyectos anteriores"
            className="flex h-9 w-9 items-center justify-center border border-ink/10 text-muted transition-colors hover:border-amber hover:text-amber"
          >
            <Icon name="ChevronLeft" className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Ver más proyectos"
            className="flex h-9 w-9 items-center justify-center border border-ink/10 text-muted transition-colors hover:border-amber hover:text-amber"
          >
            <Icon name="ChevronRight" className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="no-scrollbar mt-6 flex gap-4 overflow-x-auto scroll-smooth pb-4"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}