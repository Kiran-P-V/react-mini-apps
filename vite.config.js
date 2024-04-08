import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
  registerType: "prompt",
  // includeAssests: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  // manifest,
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
  server: {
    port: 5173,
    host: true,
  },
  resolve: {
    alias: {
      public: "/public",
      src: "/src",
      routes: "/src/routes",
      views: "/src/views",
    },
  },
});
