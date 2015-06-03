// Requires
var gulp = require('gulp');

// Include plugins
var postcss = require('gulp-postcss');
var selector = require('postcss-custom-selectors');
var autoprefixer = require('autoprefixer-core');
var sourcemaps = require('gulp-sourcemaps');
var cssnext = require('cssnext');
var rename = require('gulp-rename');

// Common tasks
gulp.task('doallthethings', ['styles-next']);

// Styles NEXT
gulp.task('styles-next', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']}),
        selector(),
        cssnext()
    ];
    gulp.src("next/knacss.css")
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('./css'))
        .pipe(rename('knacss-unminified.css'))
        .pipe(gulp.dest('./css'));
});

// Watcher
gulp.task('watch', function() {
  gulp.watch(['./next/*.css'], ['styles-next']);
});

gulp.task('default', ['doallthethings']);