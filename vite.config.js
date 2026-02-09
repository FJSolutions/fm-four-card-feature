// vite.config.js
import browserslist from 'browserslist';
import {browserslistToTargets, Features} from 'lightningcss';
import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        transformer: 'lightningcss',
        lightningcss: {
            targets: browserslistToTargets(browserslist('>= 0.25%')),
            // include: Features.Nesting | Features.Colors,
            // include: [Features.Nesting],
        },
    },
    build: {
    cssMinify: 'lightningcss', // Set CSS minifier to Lightning CSS
},
    // ... other options
});