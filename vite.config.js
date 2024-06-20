import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  resolve: {
    alias: {
      "@components": path.resolve("src", "components"),
      "@sections": path.resolve("src", "sections"),
      "@utils": path.resolve("src", "utils"),
      "@icons": path.resolve("src", "assets", "icons"),
    },
  },
  build: {
    outDir: "build",
  },
});
