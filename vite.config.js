// vite.config.js
import browserslist from 'browserslist';
import {browserslistToTargets, Features} from 'lightningcss';
import {defineConfig} from 'vite';

export default defineConfig({
    base: "./",
    css: {
        transformer: 'lightningcss',
        lightningcss: {
            targets: browserslistToTargets(browserslist('>= 0.25%')),
            // include: Features.Nesting | Features.Colors,
            // include: [Features.Nesting],
        },
    },
    build: {
        outDir: 'docs',
        cssMinify: 'lightningcss', // Set CSS minifier to Lightning CSS
        rollupOptions: {
            input: {
                main: 'index.html',
                styles: 'src/styles/main.css' // Add your CSS file here
            }
        },
    },
});