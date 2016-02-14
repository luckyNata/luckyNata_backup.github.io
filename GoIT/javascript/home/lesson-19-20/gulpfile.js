var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', function() {
  return gulp.src('js/src/*.js')
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('js/'));
});

gulp.task('concatCSS', function() {
  return gulp.src(['css/styles/mixins.scss', 'css/styles/reset.scss', 'css/styles/variables.scss', 'css/styles/style.scss'])
    .pipe(concat('main.scss'))
    .pipe(gulp.dest('css/styles'));
});

gulp.task('sass', function () {
  gulp.src('css/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
  gulp.watch('css/styles/*.scss', ['concatCSS','sass']);
});