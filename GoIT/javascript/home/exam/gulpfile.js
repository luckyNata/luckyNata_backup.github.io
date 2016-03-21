var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');
var watch = require('gulp-watch');


gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('dest/js/'));
});

gulp.task('uglify', function() {
  return gulp.src('dest/js/*.js')
    .pipe(uglify())
    .pipe(rename("main.min.js"))
    .pipe(gulp.dest('dest/js/'));
});

gulp.task('css', function () {
  return gulp.src('src/css/*.css')
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest('dest/css/'));
});

gulp.task('sass', function () {
  gulp.src('css/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
  gulp.watch('css/styles/*.scss', ['sass']);
});