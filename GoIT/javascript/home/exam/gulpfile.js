var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');


gulp.task('scripts', function() {
  return gulp.src('js/src/*.js')
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('js/dist/'));
});

gulp.task('sass', function () {
  gulp.src('css/styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
  gulp.watch('css/styles/*.scss', ['sass']);
});