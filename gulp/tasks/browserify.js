'use strict';

// ==================================
//
// Load modules.
//
// ==================================

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var browserify = require('browserify');
//tranform
var babelify = require('babelify');
var browserifyShim = require('browserify-shim');
var watchify = require('watchify');

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var config = require('../config.js');
var handleErrors = require('../util/handleErrors.js');
var gulp = require('gulp');
var debug = require('gulp-debug');



// ==================================
//
// Compile JavaScripts.
//
// ==================================


var b = browserify(config.browserify.bundleOption)
	.transform(babelify.configure({
		compact: false,
		presets: ["es2015"]
	}))
	.transform(browserifyShim);


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
	return bundle();
});

gulp.task('browserify:dist', function () {

	return b.bundle()
		.pipe(source(config.browserify.filename))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(rename({
			extname: ".min.js"
		}))
		.pipe( debug() )
		.pipe(gulp.dest(config.browserify.dest));
});
