import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from "tailwindcss";

export default defineConfig({
    resolve: {
        alias: {
            '@img': '/assets/img',
            '@css': '/assets/css',
            '@js': '/assets/js',
        },
    },

    css: {
        postcss: {
            plugins: [
                tailwindcss(),
                autoprefixer(),
            ],
        },
    },

    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }

                    if (id.includes('resources')) {
                        return 'app';
                    }
                },
            },
        },
    },
});
