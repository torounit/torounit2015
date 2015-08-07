'use strict';

// ==================================
//
// Load modules.
//
// ==================================

var config = require('../config.js');
var gulp = require('gulp');
var watch = require('gulp-watch');



// ==================================
//
// watch.
//
// ==================================

gulp.task('setWatch', function () {
	global.isWatching = true;
});

gulp.task('watch', function () {
	watch(config.sass.src, function () {
		gulp.start('sass');
	});
	watch(config.images.src, function () {
		gulp.start('images');
	});
	// watch(config.markup.src, function () {
	// 	gulp.start('markup');
	// });
});

