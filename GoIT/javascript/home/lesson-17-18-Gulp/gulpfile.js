var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
 
gulp.task('default', function() {
  gulp.src('js/src/*.js')
    .pipe(concat('script.main.js'))
    .pipe(uglify())
    .pipe(rename('script.main.min.js'))
    .pipe(gulp.dest('js/'));
});