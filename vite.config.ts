import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { resolve } from "path";
import tailwindCss from "tailwindcss";
export default defineConfig({
  plugins: [react()],
  css:{postcss:{plugins:[tailwindCss]}},
  resolve: {
    alias: [{ find:"@",replacement:path.resolve(__dirname,"src") }],
  },
});
