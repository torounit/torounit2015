'use strict';

// ==================================
//
// distribution
//
// ==================================
var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function(){
	del(['dist/**/*.*', '!.git/']);
});
gulp.task('dist', ['clean', 'build:dist'], function() {
	return gulp.src(
		[
			'./**/*.php',
			'./assets/dist/**/*.*',
			'./favicon.ico',
			'./style.css',
			"!./node_modules/**/*.*"
		],
		{ base: './' }
	)
		.pipe( gulp.dest( 'dist' ) );
} );