import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env": {},
  },
  base: 'Eronelit_lab_342',
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: "index.html"
      },
    },
  },
});
