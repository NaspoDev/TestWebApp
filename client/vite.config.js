import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // defining our proxy
  server: {
    proxy: {
      // Set this to the IP of your backend.
      // During development you would set this to http://localhost:5000 for example.
      "/api": {
        target: "http://54.158.56.176", // aws vps running our node.js app.
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
