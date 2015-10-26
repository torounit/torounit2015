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
var autoprefixer = require('autoprefixer');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var atImport = require("postcss-import");
var minifyCss = require('gulp-minify-css');
var debug = require('gulp-debug');

var processors = [
	autoprefixer(),
	atImport
];

// ==================================
//
// Sass
//
// ==================================


gulp.task('sass', function () {

	return gulp.src([config.sass.src])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(bulkSass())
		.pipe(sass())
		.on('error', handleErrors)
		.pipe(postcss(processors))
		.pipe(sourcemaps.write({
			includeContent: false,
			sourceRoot: config.sass.sourceRoot
		}))
		.pipe(gulp.dest(config.sass.dest));
});

gulp.task('sass:dist', function () {
	return gulp.src(config.sass.src)
		.pipe(bulkSass())
		.pipe(sass())
		.pipe(postcss(processors))
		.pipe(minifyCss())
		.pipe(rename({
			extname: ".min.css"
		}))
		.pipe( debug() )
		.pipe(gulp.dest(config.sass.dest));
});