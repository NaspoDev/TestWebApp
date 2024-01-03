import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Defining our development proxy.
  // NOTE: Vite proxy is ONLY for the DEV SERVER! It does not build.
  server: {
    // *Commented out because we've created our own api router because this doesnt work in production. (see ./src/api.js)
    // proxy: {
    //   // Set this to the IP of your backend.
    //   // http://clientlocalhost:port/api -> http://localhost:3000
    //   "/api": {
    //     target: "http://localhost:3000",
    //   },
    // },
  },
});
