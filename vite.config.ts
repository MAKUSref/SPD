import { defineConfig } from "vite";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  manifest: {
    theme_color: "#323334",
    background_color: "#323334",
    name: "SipPal Discovery",
    short_name: "SipPal D.",
    description: "Find your cheers mate.",
    orientation: "portrait",
    scope: "/",
    start_url: "/",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080'
      },

      '/api/ping': {
        target: 'http://localhost:8080',
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
});
