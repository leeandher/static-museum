import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import cssSourcemap from "vite-plugin-css-sourcemap";

export default defineConfig({
  plugins: [sveltekit(), cssSourcemap()],
});
