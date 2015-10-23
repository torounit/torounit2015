'use strict';

// ==================================
//
// Load modules.
//
// ==================================

var config = require('../config.js');
var handleErrors = require('../util/handleErrors.js');
var gulp = require('gulp');
var changed  = require('gulp-changed');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');


// ==================================
//
// minify images.
//
// ==================================

gulp.task('images', function () {
	return gulp.src(config.images.src)
		.pipe(changed(config.images.dest))
		.pipe(plumber({
			errorHandler: handleErrors
		}))
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [
				{
					removeViewBox: false
				}
			]
		}))
		.pipe(gulp.dest(config.images.dest));
});