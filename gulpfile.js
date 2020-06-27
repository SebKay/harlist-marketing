'use strict';

/**
 * Setup
 */
var gulp      = require('gulp');
var sass      = require('gulp-sass');
sass.compiler = require('dart-sass');
var plugins   = require('gulp-load-plugins')({
    rename: {
        'gulp-append-prepend': 'gap',
        'gulp-notify': 'notify'
    }
});

/**
 * Config
 */
var notify_config = {
    title: 'Harlist Marketing',
    onLast: true
};

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
        })
            .on("error", plugins.notify.onError({
                title: 'Sass Error',
                onLast: notify_config['onLast'],
                message: "<%= error.message %>"
            }))
        )
        .pipe(plugins.autoprefixer({
            Browserslist: ['>0.2%, last 2 versions, Firefox ESR, not dead']
        }))
        .pipe(plugins.rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(gulp.dest(paths['sass']['dest']))
        .pipe(plugins.notify({
            title: notify_config['title'],
            onLast: notify_config['onLast'],
            message: "CSS compiled successfully"
        }));
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
