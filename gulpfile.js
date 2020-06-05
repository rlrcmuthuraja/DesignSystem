'use strict';

// -----------------------------------------------------------------------------
// DEPENDENCIES
// -----------------------------------------------------------------------------

// Css
const autoprefixer      = require('gulp-autoprefixer');
const cssnano           = require('gulp-cssnano');
const sass              = require('gulp-sass');
const sasslint          = require('gulp-sass-lint');

// Fractal
const fractal           = require('./fractalfile.js');
const logger            = fractal.cli.console;

// Utils
const path              = require('path');
const del               = require('del');
const copy              = require('gulp-copy');
const gulp              = require('gulp');
const newer             = require('gulp-newer');
const sequence          = require('run-sequence');
const rename            = require('gulp-rename');

// JavaScript
const jshint            = require('gulp-jshint');
const stylish           = require('jshint-stylish');
const uglify            = require('gulp-uglify');

// Images
const cheerio           = require('gulp-cheerio');
const imagemin          = require('gulp-imagemin');
const svgstore          = require('gulp-svgstore');
const zip               = require('gulp-zip');

// Misc
const sourcemaps        = require('gulp-sourcemaps');
const theo              = require('gulp-theo');
const flatten           = require('gulp-flatten');

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

const paths = {
    src                 : path.resolve(__dirname) + '/src',
    dest                : path.resolve(__dirname) + '/tmp',
    build               : path.resolve(__dirname) + '/www'
};

/*
 * Start the Fractal server
 *
 * In this example we are passing the option 'sync: true' which means that it will
 * use BrowserSync to watch for changes to the filesystem and refresh the browser automatically.
 * Obviously this is completely optional!
 *
 * This task will also log any errors to the console.
 */

gulp.task('fractal:serve', function(){
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        logger.success(`Fractal server is now running at ${server.url}`);
    });
});

/*
 * Run a static export of the project web UI.
 *
 * This task will report on progress using the 'progress' event emitted by the
 * builder instance, and log any errors to the terminal.
 *
 * The build destination will be the directory specified in the 'builder.dest'
 * configuration option set above.
 */

gulp.task('fractal:build', function(){
    const builder = fractal.web.builder();
    builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
    builder.on('error', err => logger.error(err.message));
    return builder.build().then(() => {
        logger.success('Fractal build completed!');
    });
});

gulp.task('clean', function(cb) {
    return del([
        paths.dest + '/assets/styles/',
        paths.dest + '/assets/scripts/',
        paths.dest + '/*.{txt,json,xml}'
    ], cb);
});

gulp.task('clean:all', function(cb) {
    return del([
        paths.dest + '/assets/',
        paths.dest + '/*.{txt,json,xml}'
    ], cb);
});

/*******************************************************************************
 SASS TASK
 *******************************************************************************/

theo.registerFormat('config.js', `module.exports = {
    title: 'Colors',
    status: 'prototype',
    collated: true,
    context: {
        size: 'moderate',
        classes: false,
        title: false,
        categories: [
            {
                name: '{{prop.category}}',
                colors: [
                    {{#each props as |prop|}}
                    {
                        context: {
                            {{#if prop.comment}}// {{prop.comment}}{{/if}}
                            name: '{{kebabcase prop.name}}',
                            hex: '{{prop.value}}',
                            scss: '$color-{{prop.name}}',
                            category: '{{prop.category}}'
                        }
                    },
                    {{/each}}
                ]
            }
        ]
    }
};
`);

theo.registerFormat('scss', `// Source: {{stem meta.file}}
    {{#each props as |prop|}}
        {{#if prop.comment~}}
        // {{{prop.comment}}}
        {{/if~}}
        \${{prop.name}}: {{{prop.value}}};\n
    {{/each}}
`);

gulp.task('tokens:config:colors', function () {
    return gulp.src([
        paths.src + '/assets/styles/tokens/colors.yml',
        '!' + paths.src + '/assets/styles/tokens/_*'
    ])
        .pipe(theo.plugin(
            {
                format: {
                    type: 'config.js'
                }
            }
        ))
        .pipe(gulp.dest(paths.src + '/components/_partials/_colors'));
});

gulp.task('tokens:scss', function () {
    return gulp.src([
        paths.src + '/assets/styles/tokens/*.yml',
        '!' + paths.src + '/assets/styles/tokens/_*'
    ])
        .pipe(theo.plugin(
            {
                format: {
                    type: 'scss'
                }
            }
        ))
        .pipe(rename({
            prefix: '_conf_'
        }))
        .pipe(gulp.dest(paths.src + '/assets/styles/sass/01-config/'));
});

gulp.task('tokens', function(done) {
    return sequence('tokens:config:colors', 'tokens:scss', done);
});

gulp.task('css', function () {
    return gulp.src([
            paths.src + '/**/*.scss',
            '!' + paths.src + '/assets/styles/sass/00-vendor/**/*'
        ])
        .pipe(sasslint())
        .pipe(sasslint.format())
        .pipe(sasslint.failOnError())
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [
                paths.src + '/components'
            ]
        }).on('error', sass.logError))
        .pipe(autoprefixer(
            {
                'browserlist': [
                    'last 2 versions'
                ],
                grid: true
            }
        ))
        .pipe(cssnano({
            zindex: false,
            discardUnused: false
        }))
        .pipe(flatten())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.dest + '/assets/styles/css'));
});

gulp.task('meta', function() {
    return gulp.src(paths.src + '/*.{txt,json,xml}')
        .pipe(gulp.dest(paths.dest));
});

gulp.task('component:images', function() {
    return gulp.src(paths.src + '/components/**/*.{gif,png,jpg,svg}')
        .pipe(newer(paths.dest + '/assets/img/components'))
        .pipe(imagemin([
            imagemin.gifsicle({
                interlaced: true
            }),
            imagemin.jpegtran({
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 5
            }),
            imagemin.svgo({
                plugins: [
                    {
                        removeViewBox: false
                    }
                ]
            })
        ]))
        .pipe(flatten())
        .pipe(gulp.dest(paths.dest + '/assets/img/components'));
});

gulp.task('favicons', function() {
    return gulp.src(paths.src + '/assets/img/favicons/**/*.{ico,png,svg}')
        .pipe(newer(paths.dest + '/assets/img/favicons'))
        .pipe(gulp.dest(paths.dest + '/assets/img/favicons'));
});

gulp.task('icons', function() {
    return gulp.src(paths.src + '/assets/img/icons/**/*.svg')
        .pipe(imagemin({
            plugins: [{
                cleanupIDs: {
                    minify: true
                },
                removeUnknownsAndDefaults: true
            }]
        }))
        .pipe(gulp.dest(paths.dest + '/assets/img/icons'));
});

gulp.task('icons:sprite', function () {
    return gulp.src(paths.src + '/assets/img/icons/**/*.svg')
        .pipe(newer(paths.dest + '/assets/img/icons'))
        .pipe(imagemin([
            imagemin.svgo({
                plugins: [
                    {
                        cleanupIDs: {
                            remove: false,
                            minify: true
                        },
                        removeUnknownsAndDefaults: true
                    }
                ]
            })
        ]))
        .pipe(svgstore({
            fileName: 'icons.svg'
        }))
        .pipe(cheerio({
            run: function ($, file) {
                $('[fill]').removeAttr('fill');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(gulp.dest(paths.dest + '/assets/img/icons/sprites'));
});

gulp.task('icons:zip', function() {
    return gulp.src([
            paths.dest + '/assets/img/icons/**/*',
            '!' + paths.dest + '/assets/img/icons/sprites/*'
        ])
        .pipe(zip('mrx-icons.zip'))
        .pipe(gulp.dest(paths.dest + '/downloads/'));
});

gulp.task('imagemin:gfx', function() {
    return gulp.src(paths.src + '/assets/img/gfx/**/*')
        .pipe(newer(paths.dest + '/assets/img/gfx'))
        .pipe(imagemin([
            imagemin.gifsicle({
                interlaced: true
            }),
            imagemin.jpegtran({
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 5
            }),
            imagemin.svgo({
                plugins: [
                    {
                        removeViewBox: false
                    }
                ]
            })
        ]))
        .pipe(gulp.dest(paths.dest + '/assets/img/gfx'));
});

gulp.task('imagemin:content', function() {
    return gulp.src(paths.src + '/assets/img/content/**/*')
        .pipe(newer(paths.dest + '/assets/img/content'))
        .pipe(imagemin([
            imagemin.gifsicle({
                interlaced: true
            }),
            imagemin.jpegtran({
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 5
            }),
            imagemin.svgo({
                plugins: [
                    {
                        removeViewBox: false
                    }
                ]
            })
        ]))
        .pipe(gulp.dest(paths.dest + '/assets/img/content'));
});

gulp.task('imagemin:doc', function() {
    return gulp.src(paths.src + '/assets/img/doc/**/*')
        .pipe(newer(paths.dest + '/assets/img/doc'))
        .pipe(imagemin([
            imagemin.gifsicle({
                interlaced: true
            }),
            imagemin.jpegtran({
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 5
            }),
            imagemin.svgo({
                plugins: [
                    {
                        removeViewBox: false
                    }
                ]
            })
        ]))
        .pipe(gulp.dest(paths.dest + '/assets/img/doc'));
});

gulp.task('fonts', function() {
    return gulp.src(paths.src + '/assets/fonts/**/*.{eot,otf,svg,ttf,woff,woff2}')
        .pipe(copy(paths.dest + '/assets/fonts', {
            prefix: 3
        }));
});

gulp.task('jshint', function() {
    return gulp.src([
        paths.src + '/assets/scripts/js/**/*.js',
        paths.src + '/components/**/*.js',
        '!' + paths.src + '/components/**/*config..js',
        '!' + paths.src + '/assets/scripts/js/vendor/**/*.js'
    ])
        .pipe(jshint({
            evil: true
        }))
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(jshint.reporter(stylish));
});

gulp.task('js:copy:common', function() {
    return gulp.src(paths.src + '/assets/scripts/js/**/*')
        .pipe(copy(paths.dest + '/assets/scripts/js', {
            prefix: 4
        }));
});

gulp.task('js:copy:components', function() {
    return gulp.src([
        paths.src + '/components/**/*.js',
        '!' + paths.src + '/components/**/*.config.js'
        ])
        .pipe(flatten())
        .pipe(gulp.dest(paths.dest + '/assets/scripts/js/components'));
});

gulp.task('js:uglify', function() {
    return gulp.src(paths.dest + '/assets/scripts/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(paths.dest + '/assets/scripts/js'));
});

gulp.task('watch', function () {
    return sequence('fractal:serve', function () {
        gulp.watch(paths.src + '/assets/styles/tokens/**/*.{yml, json}', function () {
            return sequence(['tokens'], ['css']);
        });
        gulp.watch(paths.src + '/**/*.scss', function () {
            return sequence('css');
        });
        gulp.watch(paths.src + '/assets/img/icons/**/*.svg', function () {
            return sequence('icons', 'icons:sprite');
        });
        gulp.watch(paths.src + '/assets/fonts/**/*.{eot,svg,ttf,woff,woff2}', function () {
            return sequence('fonts');
        });
        gulp.watch(paths.src + '/assets/img/gfx/**/*', function () {
            return sequence('imagemin:gfx');
        });
        gulp.watch(paths.src + '/assets/img/content/**/*', function () {
            return sequence('imagemin:content');
        });
        gulp.watch(paths.src + '/assets/img/doc/**/*', function () {
            return sequence('imagemin:doc');
        });
        gulp.watch([
            paths.src + '/assets/scripts/js/**/*',
            paths.src + '/components/**/*.js',
            '!' + paths.src + '/components/**/*.config.js'], function () {
            return sequence('jshint', ['js:copy:common', 'js:copy:components'], ['js:uglify']);
        });
    });
});

gulp.task('compile', function(cb) {
    return sequence(
        ['tokens'],
        'jshint',
        [
            'css',
            'component:images',
            'imagemin:gfx',
            'imagemin:content',
            'imagemin:doc',
            'icons',
            'icons:sprite',
            'fonts',
            'favicons',
            'meta'],
        [
            'js:copy:common',
            'js:copy:components'
        ],
        ['js:uglify'],
        cb);
});

gulp.task('start', function(cb) {
    return sequence(['clean'], ['compile'], ['fractal:serve'], cb)
});

gulp.task('build', function(cb) {
    return sequence(['clean:all'], ['compile'], ['icons:zip'], ['fractal:build'], cb)
});

gulp.task('dev', function(cb) {
    return sequence(['clean'], ['compile'], ['watch'], cb)
});

gulp.task('publish', ['fractal:build'], function () {
    return publish();
});