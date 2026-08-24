import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tanstackStart({
      server: { entry: "server" },
      prerender: {
        enabled: true,
        failOnError: true,
        crawlLinks: false,
      },
    }),
    viteReact(),
    tailwindcss(),
  ],
});
