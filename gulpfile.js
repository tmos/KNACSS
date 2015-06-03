// Requires
var gulp = require('gulp');

// Include plugins
var minifycss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var selector = require('postcss-custom-selectors');
var calc = require("postcss-calc");
var cssnext = require('cssnext');
var rename = require('gulp-rename');

// Common tasks
gulp.task('doallthethings', ['styles-next']);

// Styles NEXT
gulp.task('styles-next', function () {
    var processors = [
        selector(),
        calc(),
        cssnext()
    ];
    gulp.src("next/knacss.css")
        .pipe(postcss(processors))
        .pipe(sourcemaps.init())
        .pipe(rename('knacss-unminified.css'))
        .pipe(gulp.dest('./css'))
        .pipe(rename('knacss.css'))
        .pipe(minifycss({keepBreaks:false,keepSpecialComments:0}))
        .pipe(sourcemaps.write('.', {includeContent: false}))
        .pipe(gulp.dest('./css'));
});

// Watcher
gulp.task('watch', function() {
  gulp.watch(['./next/*.css'], ['styles-next']);
});

gulp.task('default', ['doallthethings']);