import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vite builds the app; the two plugins add JSX support (React) and Tailwind CSS.
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],

  // GitHub Pages serves a project site from a sub-path:
  //   https://<user>.github.io/Daily-video-challenge/
  // so the production build must prefix its asset URLs with that path.
  // `npm run dev` keeps the normal "/" so local development is unchanged.
  base: command === "build" ? "/Daily-video-challenge/" : "/",
}));
