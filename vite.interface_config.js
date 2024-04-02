import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { resolve } from 'path';
import fs from 'fs/promises';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: path.resolve("./public/frontend/interface/src/index.jsx"),
        }
    },
    publicDir: false,
    build: {
        outDir: './public/frontend/interface/reactoutput',
        manifest: false,
        sourcemap: true,
        rollupOptions: {
            input: resolve(__dirname, './public/frontend/interface/src/index.jsx'),
            output: {
                entryFileNames: 'interface.js',
            },
        },
    },
    esbuild: {
        loader: 'jsx',
        include: /public\/frontend\/interface\/src\/.*\.jsx?$/,
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
                {
                    name: 'load-js-files-as-jsx',
                    setup(build) {
                        build.onLoad(
                            { filter: /public\/frontend\/interface\/src\/.*\.jsx?$/ },
                            async (args) => ({
                                loader: 'jsx',
                                contents: await fs.readFile(args.path, 'utf8'),
                            })
                        );
                    },
                },
            ],
        },
    },
    define: {
        // _global: ({}),
        // process: {
        //     env: {},
        // }
    },
})