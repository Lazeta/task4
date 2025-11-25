import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default mergeConfig(defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
}), {
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./vitest.setup.ts",
    },
});
