
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var csso = require('gulp-csso');
var cleanCSS = require('gulp-clean-css');




//pipelining and combination of multiple functions in gulp default
gulp.task('allsass', function(){
    return gulp.src('./static/UI/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/UI/css/'));
});


gulp.task('sasswatch', function(){
    gulp.watch(['./static/UI/scss/styles.scss'], ['allsass'])
})

gulp.task('default', ['allsass', 'alltask', 'watch']);