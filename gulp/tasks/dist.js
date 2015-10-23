'use strict';

// ==================================
//
// distribution
//
// ==================================
var gulp = require('gulp');
var debug = require('gulp-debug');

gulp.task('dist', [ 'build:dist'], function() {
	return gulp.src(
			[
				'./**/*.php',
				'./assets/dist/**',
				'./favicon.ico',
				'./style.css',
				"!./dist/**",
				"!./node_modules/**/*.*"
			],
			{ base: './' }
		)
		.pipe( debug() )
		.pipe( gulp.dest( 'dist' ) );



} );