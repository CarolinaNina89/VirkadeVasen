// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   server: {
//     open: true, // Öppna automatiskt webbläsaren vid uppstart
//   },
//   plugins: [react()],
//   resolve: {
//     alias: {
//       // Specifik upplösning för React
//       react: "react",
//       "react-dom": "react-dom",
//     },
//   },
//   optimizeDeps: {
//     include: ["react", "react-dom"], // Explicitly include react and react-dom for dependency optimization
//   },
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
