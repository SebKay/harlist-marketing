'use strict';

/**
 * Setup
 */
var gulp      = require('gulp');
var sass      = require('gulp-sass')(require('sass'));
var plugins   = require('gulp-load-plugins')({
    rename: {
        'gulp-append-prepend': 'gap',
    }
});

var paths = {
    sass: {
        source: [
            'assets/scss/**/*.scss'
        ],
        dest: 'assets/css/'
    }
};

/**
 * Sass
 */
gulp.task('compile:styles', function () {
    return gulp.src(paths['sass']['source'])
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(plugins.autoprefixer({
            Browserslist: ['>0.2%, last 2 versions, Firefox ESR, not dead']
        }))
        .pipe(plugins.rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(gulp.dest(paths['sass']['dest']));
});

/**
 * Build project
 */
gulp.task('build', gulp.parallel('compile:styles'));

/**
 * Watch project
 */
gulp.task('watch', function () {
    gulp.watch(paths['sass']['source'], gulp.series('compile:styles'));
});
