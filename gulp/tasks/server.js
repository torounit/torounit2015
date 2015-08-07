'use strict';

// ==================================
//
// Load modules.
//
// ==================================

var browserSync = require('browser-sync');
var connectPHP = require('gulp-connect-php');
var config = require('../config.js');
var handleErrors = require('../util/handleErrors.js');
var gulp = require('gulp');


// ==================================
//
// PHP Server
//
// ==================================
gulp.task('setPHPServer', function () {
	global.phpServer = true;
	config.browserSync.proxy = 'localhost:8000';
	connectPHP.server();
});

// ==================================
//
// browserSync
//
// ==================================

gulp.task('browserSync', function () {

	if (config.browserSync.proxy) {

		browserSync({
			proxy: config.browserSync.proxy
		});
		$.watch(config.browserSync.files, function () {
			browserSync.reload();
		});
	} else {
		browserSync({
			server: config.browserSync.server,
			files: config.browserSync.files
		});
	}
});
