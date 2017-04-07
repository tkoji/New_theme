const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-cleancss')
const htmlmin = require('gulp-htmlmin')

gulp.task('html', function(){
	return gulp.src('./index.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist'))
})

gulp.task('css', function(){
	return gulp.src('./style.css')
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(gulp.dest('./dist'))
})

gulp.task('watch', ['build'], function(){
	gulp.watch(['./index.html'], ['html'])
	gulp.watch(['./style.css'], ['css'])
})

gulp.task('build', ['html', 'css'])
