import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const externals = [
  "react",
  "react/jsx-runtime",
  "react/jsx-dev-runtime",
  "react-dom",
  "react-dom/client",
  "react-dom/server",
  "@mui/material",
  "@emotion/react",
  "@emotion/styled",
];

export default defineConfig({
  plugins: [react()],

  resolve: {},

  optimizeDeps: {
    // Prevent Vite from pre-bundling these during dev
    exclude: externals,
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: () => "index.js",
    },

    commonjsOptions: {
      // Stop Rollup from “converting” these and causing re-bundling
      exclude: externals,
    },

    rollupOptions: {
      external(id) {
        return externals.some((pkg) => id === pkg || id.startsWith(pkg + "/"));
      },
    },
  },
});
