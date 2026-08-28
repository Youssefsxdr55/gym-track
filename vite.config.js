import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Capacitor loads the app from a local file:// context on Android,
  // so all built asset paths must be relative, not root-absolute.
  base: "./",
  build: {
    outDir: "dist",
  },
});
