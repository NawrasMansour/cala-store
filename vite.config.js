import path from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";
import legacy from "@vitejs/plugin-legacy";

export default ({ command }) => ({
    base: command === "serve" ? "" : "/build/",
    publicDir: "fake_dir_so_nothing_gets_copied",
    build: {
        manifest: true,
        outDir: "public/build",
        rollupOptions: {
            input: "resources/scripts/app.jsx",
        },
    },
    resolve: {
        alias: {
            "@": path.resolve("./resources"),
        },
    },
    plugins: [reactRefresh(), legacy()],
});
