import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // defining our proxy
  server: {
    proxy: {
      // Set this to the IP of your backend.

      /* 
      In this example, my app is running on testwebapp.naspoapps.com, and the
      backend will be running on api.testwebapp.naspoapps.com.
      This means that testwebapp.naspoapps.com/api will point to api.testwebapp.naspoapps.com. 
      */

      // During development you would set this to http://localhost:5000 for example.
      "/api": "https://api.testwebapp.naspoapps.com", // aws vps running our node.js app.
    },
  },
});
