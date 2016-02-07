'use strict';

// ==================================
//
// Load modules.
//
// ==================================

var browserSync = require('browser-sync');
var config = require('../config.js');
var gulp = require('gulp');


// ==================================
//
// browserSync
//
// ==================================

gulp.task('browserSync', function () {
	browserSync(config.browserSync);
});
