/**
 * node脚本实现单一任务
 */
const gulp = require('gulp');
const uglify = require('gulp-uglify');

const nodeFun = function() {
	gulp.src('./index.js')
		.pipe(uglify())
		.pipe(gulp.dest('./app'));
}
nodeFun();


/**
 * 执行gulp的多任务
 */
// const gulp = require('gulp');
// require('./gulpfile.js');

// if(gulp.tasks.ug){
// 	console.log('has ug task');
// 	gulp.start('ug');
// }
