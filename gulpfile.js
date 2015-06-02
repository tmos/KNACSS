// Requires
var gulp = require('gulp');

// Include plugins
var cssnext = require('gulp-cssnext');
var rename = require('gulp-rename');

// Common tasks
gulp.task('styles', ['styles-next']);
gulp.task('doallthethings', ['styles-next']);


// Styles NEXT
gulp.task('styles-next', function () {
  gulp.src("next/knacss.css")
    .pipe(cssnext({
        compress: false
    }))
    .pipe(rename('knacss-unminified.css'))
    .pipe(gulp.dest("css/"))

	gulp.src("next/knacss.css")
    .pipe(cssnext({
        compress: true
    }))
    .pipe(gulp.dest("css/"))
});

// Watcher
gulp.task('watch', function() {
  gulp.watch(['./next/*.css'], ['styles-next']);
});

gulp.task('default', ['doallthethings']);