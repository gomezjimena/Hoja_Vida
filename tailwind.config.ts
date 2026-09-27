import type { Config } from "tailwindcss";

// Paleta y tipografía definidas para este proyecto:
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blueprint: {
          DEFAULT: "#101B33", // fondo del sidebar izquierdo
          light: "#1C2B4A", // superficies secundarias sobre el sidebar
          line: "#2E3E63", // líneas divisorias sutiles sobre el sidebar
        },
        paper: "#F5F6F8", // fondo del contenido central
        ink: "#12131A", // texto principal
        muted: "#5B6172", // texto secundario
        amber: {
          DEFAULT: "#E8A33D", // acento cálido (anotación de plano)
          soft: "#F6E4C4",
        },
        teal: {
          DEFAULT: "#2E8B84", // acento secundario (enlaces, hover)
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-plex)", "sans-serif"],
      },
      maxWidth: {
        content: "56rem",
      },
    },
  },
  plugins: [],
};
export default config;
