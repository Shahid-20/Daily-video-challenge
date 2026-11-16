import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vite builds the app; the two plugins add JSX support (React) and Tailwind CSS.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
