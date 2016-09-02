const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('ug', function(){
	return gulp.src('./index.js')
		.pipe(uglify())
		.pipe(gulp.dest('./ug'));
});

gulp.start('ug');

gulp.task('watch', function(){
	gulp.watch('./index.js', ['ug']);
});