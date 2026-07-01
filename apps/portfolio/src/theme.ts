import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

/**
 * Tema do portfólio (Chakra UI v3).
 * A paleta `brand` é um roxo/magenta inspirado no disco de acreção de um
 * buraco negro (violeta com brilho magenta).
 */
const config = defineConfig({
  globalCss: {
    "html, body": {
      // Fundo base bem escuro arroxeado, com brilho ambiente sutil.
      background:
        "radial-gradient(1000px 700px at 82% 8%, rgba(80,25,130,0.22), transparent 60%), radial-gradient(800px 600px at 10% 92%, rgba(140,35,120,0.14), transparent 60%), #07040f",
      backgroundAttachment: "fixed",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Poppins', system-ui, sans-serif" },
        body: { value: "'Inter', system-ui, sans-serif" },
      },
      colors: {
        brand: {
          50: { value: "#faf5ff" },
          100: { value: "#f1e3ff" },
          200: { value: "#e4c7ff" },
          300: { value: "#cf9dff" },
          400: { value: "#b96bff" },
          500: { value: "#a238f5" },
          600: { value: "#8b21e0" },
          700: { value: "#7016b8" },
          800: { value: "#571394" },
          900: { value: "#3f0d6e" },
        },
        // Camadas de fundo escuras arroxeadas usadas nos componentes.
        space: {
          900: { value: "#07040f" },
          800: { value: "#0d0820" },
          700: { value: "#150f2b" },
          600: { value: "#1c1440" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "white" },
          fg: { value: "{colors.brand.300}" },
          muted: { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.400}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
