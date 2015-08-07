'use strict';

// ==================================
//
// Load modules.
//
// ==================================

var config = require('../config.js');
var handleErrors = require('../util/handleErrors.js');
var gulp = require('gulp');
var bulkSass = require('gulp-sass-bulk-import');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');


// ==================================
//
// Sass
//
// ==================================


gulp.task('sass', function () {

	gulp.src([config.sass.src])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(bulkSass())
		.pipe(sass())
		.on('error', handleErrors)
		.pipe(autoprefixer())
		.pipe(sourcemaps.write({
			includeContent: false,
			sourceRoot: config.sass.sourceRoot
		}))
		.pipe(gulp.dest(config.sass.dest));
});

gulp.task('sass:dist', function () {
	gulp.src(config.sass.src)
		.pipe(bulkSass())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(rename({
			extname: ".min.css"
		}))
		.pipe(gulp.dest(config.sass.dest));
});