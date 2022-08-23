import { defineConfig } from 'vite';
import path from "path";
import laravel from 'laravel-vite-plugin';
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
    esbuild: {
    },
    resolve: {
        alias: {
            "@": path.resolve("./resources"),
        },
    },
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        reactRefresh()
    ],
});
