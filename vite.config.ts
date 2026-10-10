import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: "index.html",
        privacyPolicy: "privacy-policy/index.html",
        termsAndConditions: "terms-and-conditions/index.html",
      },
    },
  },
});
