'use strict';

// ==================================
//
// Load modules.
//
// ==================================

var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var config = require('../config.js');
var handleErrors = require('../util/handleErrors.js');
var gulp = require('gulp');



// ==================================
//
// Compile JavaScripts.
//
// ==================================


var b = browserify(config.browserify.bundleOption)
	.transform('babelify')
	.transform("browserify-shim")
	.transform("debowerify");


gulp.task('browserify', function () {

	var bundle = function () {
		b.bundle().on('error', handleErrors)
			.pipe(source(config.browserify.filename))
			.pipe(gulp.dest(config.browserify.dest));
	};
	if (global.isWatching) {
		var bundler = watchify(b);
		bundler.on('update', bundle);
	}
	bundle();
});

gulp.task('browserify:dist', function () {

	b.bundle()
		.pipe(source(config.browserify.filename))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(rename({
			extname: ".min.js"
		}))
		.pipe(gulp.dest(config.browserify.dest));
});
