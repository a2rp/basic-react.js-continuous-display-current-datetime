import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/basic-react.js-continuous-display-current-datetime/",
    plugins: [react()],
});
