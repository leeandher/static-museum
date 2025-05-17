import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
