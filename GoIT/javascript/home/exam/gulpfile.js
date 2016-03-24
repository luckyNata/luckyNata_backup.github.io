var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var concatCss = require('gulp-concat-css');
var uglifycss = require('gulp-uglifycss');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
const filter = require('gulp-filter');


gulp.task('scripts', function() {
  return gulp.src('src/js/vendors/*.js')
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dest/js/'));
});

gulp.task('uglify', function() {
  return gulp.src('dest/js/vendor.js')
    .pipe(uglify())
    .pipe(rename("vendor.min.js"))
    .pipe(gulp.dest('dest/js/'));
});

gulp.task('css', function () {
  const f = filter(['src/css/styles.css', 'src/css/reset.css', 'src/css/carousel_style.css']);
  return gulp.src('src/css/*.css')
    .pipe(f)
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest('dest/css/'));
});

gulp.task('uglifycss', function () {
  gulp.src('dest/css/main.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('dest/css/'));
});

gulp.task('sass', function () {
  gulp.src('src/css/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css/'));
});

gulp.task('watch', function () {
  gulp.watch('src/css/styles/*.scss', ['sass']);
});