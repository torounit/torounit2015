'use strict';

// ==================================
//
// Load modules.
//
// ==================================

var gulp = require('gulp');

// ==================================
//
// tasks.
//
// ==================================


gulp.task('build', ['fonts', 'sass', 'images', 'browserify']);
gulp.task('build:dist', ['build', 'sass:dist', 'browserify:dist']);

gulp.task('default', ['setWatch', 'build', 'watch', 'browserSync']);
gulp.task('phpserver', ['setPHPServer', 'default']);


// ==================================
//
// distribution
//
// ==================================

gulp.task( 'dist',['build:dist'], function() {
    return gulp.src(
        [
            './**/*.php',
            './assets/dist/**/*.*',
            './favicon.ico',
            './style.css',
            "!./dist/**/*.*",
            "!./node_modules/**/*.*"
        ],
        { base: './' }
    )
    .pipe( gulp.dest( 'dist' ) );
} );