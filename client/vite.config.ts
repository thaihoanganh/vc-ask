import { resolve } from "path";

import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/assets"),
      "@components": resolve(__dirname, "src/components"),
      "@pages": resolve(__dirname, "src/pages"),
      "@modules": resolve(__dirname, "src/modules"),
      "@routes": resolve(__dirname, "src/routes"),
      "@shared": resolve(__dirname, "src/shared"),
      "@store": resolve(__dirname, "src/store"),
    },
  },
});
