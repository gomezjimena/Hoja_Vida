"use client";

import { useEffect } from "react";
import Icon from "@/components/atoms/Icon";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

// Diálogo genérico: lo usa el botón de la sección de Perfil y el
// botón "Saber más" de cada ProjectCard. Una sola implementación,
// dos usos distintos.
export default function Modal({ open, onClose, title, children }: ModalProps) {
  // Cierra con la tecla Escape mientras el diálogo está abierto.
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  useEffect(() => {
  if (!open) return;
  const original = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  return () => {
    document.body.style.overflow = original;
  };
}, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4 animate-[fadeIn_150ms_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto border border-ink/10 bg-white p-6 shadow-xl animate-[scaleIn_150ms_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 className="font-display text-xl text-ink">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="text-muted transition-colors hover:text-amber"
          >
            <Icon name="X" className="h-5 w-5" />
          </button>
        </div>
        <div className="text-sm leading-relaxed text-muted">{children}</div>
      </div>
    </div>
  );
}
