var gulp   = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var Filter = require('gulp-filter');

gulp.task('css', function () {

    //var filter = Filter('./src/*.styl');

    return gulp.src([
            './lib/**.css'
        ])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./min'));
});