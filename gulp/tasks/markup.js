'use strict';

// ==================================
//
// Load modules.
//
// ==================================

var config = require('../config.js');
var gulp = require('gulp');

// ==================================
//
// Fonts
//
// ==================================

gulp.task('markup', function () {

	gulp.src([config.markup.src])
		.pipe(gulp.dest(config.markup.dest));
});
