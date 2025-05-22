import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",
    globals: true, // abilita le funzioni più comuni in maniera da essere disponibili globalmente senza import
    setupFiles: "./src/tests/setup.js",
  },
});
