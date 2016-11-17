import gulp from 'gulp';
import aigis from 'gulp-aigis';

gulp.task("aigis", function() {
	gulp.src("./aigis_config.yml")
		.pipe(aigis());
});