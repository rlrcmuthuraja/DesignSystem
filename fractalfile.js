'use strict';

const paths = {
    build               : `${__dirname}/www`,
    static              : `${__dirname}/tmp`,
    src                 : `${__dirname}/src`,
};

const packageJson       = require('./package.json');
const fractal           = require('@frctl/fractal').create();
const mandelbrot        = require('@frctl/mandelbrot');
const nunjucks          = require('@frctl/nunjucks')({
    paths: [
        `${paths.static}/assets/img/favicons`,
        `${paths.static}/assets/img/icons`,
        `${paths.static}/assets/img/gfx`,
        `${paths.static}/assets/img/content`,
        `${paths.static}/assets/img/doc`
    ]
});

// Project config
fractal.set('project.title', 'Muthuraja Design System');

// Components config
fractal.components.engine(nunjucks);
fractal.components.set('default.preview', '@preview');
fractal.components.set('ext', '.njk');
fractal.components.set('path', `${paths.src}/components`);
fractal.components.set('statuses', {
    prototype: {
        label: "Prototype",
        description: "Do not implement.",
        color: {
            bg: "#fbebea",
            border: "#da3a2f"
        }
    },
    wip: {
        label: "WIP",
        description: "Work in progress. Implement with caution.",
        color: {
            bg: "#fffa99",
            border: "#fff300"
        }
    },
    ready: {
        label: "Ready",
        description: "Ready to implement.",
        color: {
            bg: "#ccf6e1",
            border: "#00d268"
        }
    }
});
fractal.components.set('default.status', 'prototype');

// Docs config
fractal.docs.engine(nunjucks);
fractal.docs.set('ext', '.md');
fractal.docs.set('path', `${paths.src}/docs`);
fractal.docs.set('statuses', {
    draft: {
        label: 'Draft',
        description: 'Work in progress.',
        color: {
            bg: "#fffa99",
            border: "#fff300"
        }
    },
    ready: {
        label: 'Ready',
        description: 'Ready for referencing.',
        color: {
            bg: "#ccf6e1",
            border: "#00d268"
        }
    }
});
fractal.docs.set('default.status', 'draft');

// Web UI config
const mrxTheme = mandelbrot({
    version: packageJson.version,
    manifest: '/manifest.json',
    meta_theme_color: '#006776',
    ms_tile_color: '#006776',
    ms_tile_img: '/assets/img/favicons/mstile-144x144.png',
    apple_touch_ico: '/assets/img/favicons/apple-touch-icon.png',
    safari_pin_tab_img: '/assets/img/favicons/safari-pinned-tab.svg',
    safari_pin_tab_color: '#006776',
    favicon: '/assets/img/favicons/favicon.ico',
    favicon_16: '/assets/img/favicons/favicon-16x16.png',
    favicon_32: '/assets/img/favicons/favicon-32x32.png',
    skin: 'white',
    nav: ['docs', 'components'],
    styles: [
        '/assets/styles/css/mrx-fonts.css',
        '/assets/styles/css/fractal.css'
    ]
});

mrxTheme.addLoadPath(__dirname + '/theme/views');
fractal.web.theme(mrxTheme);
fractal.web.set('static.path', paths.static);
fractal.web.set('builder.dest', paths.build);
fractal.web.set('builder.urls.ext', null);

// Export config
module.exports = fractal;
