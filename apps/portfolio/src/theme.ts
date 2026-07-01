import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

/**
 * Tema do portfólio (Chakra UI v3).
 * A paleta `brand` é o verde-água usado nos destaques do site.
 */
const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Poppins', system-ui, sans-serif" },
        body: { value: "'Inter', system-ui, sans-serif" },
      },
      colors: {
        brand: {
          50: { value: "#e6fbf5" },
          100: { value: "#c3f3e5" },
          200: { value: "#8fe7cf" },
          300: { value: "#54d6b4" },
          400: { value: "#25bd97" },
          500: { value: "#0fa17f" },
          600: { value: "#088067" },
          700: { value: "#0a6653" },
          800: { value: "#0c5143" },
          900: { value: "#0b3d33" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "white" },
          fg: { value: "{colors.brand.600}" },
          muted: { value: "{colors.brand.100}" },
          emphasized: { value: "{colors.brand.400}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
