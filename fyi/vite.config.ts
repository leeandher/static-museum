import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: [".ts", ".vue"],
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    include: ["core-js"],
  },
  build: {
    commonjsOptions: {
      include: [
        /core-js/,
        /vue-property-decorator/,
        /vue-class-component/,
        /lodash/,
        /vue-clipboard2/,
      ],
    },
  },
});
