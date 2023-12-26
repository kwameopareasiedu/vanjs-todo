import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const base = mode === "production" ? "vanjs-todo" : "";

  return {
    base: base,
    plugins: [],
    build: {
      outDir: "docs"
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src")
      }
    }
  };
});
