import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// `base` controla o caminho público onde a app é servida.
// - GitHub Pages "user site" (pablobispo13.github.io) -> "/"
// - GitHub Pages "project site" (usuario.github.io/repo) -> "/repo/"
// Defina VITE_BASE no ambiente de build (o workflow do GitHub Actions faz isso).
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
