import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [],
  build: {
    outDir: "docs"
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  }
});
