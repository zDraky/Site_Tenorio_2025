import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Site_Tenorio_2025/", // Caminho correto para GitHub Pages
});
