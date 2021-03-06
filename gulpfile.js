'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var replaceName = require('gulp-replace-name');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');

gulp.task('default', ['js', 'watch']);

gulp.task('js', function() {
  return browserify('./lib/main-web.js')
    .transform(babelify, { presets: ['es2015'] })
    .bundle()
    .pipe(source('main.js'))
    .pipe(rename('util-dom.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(streamify(uglify()))
    .pipe(streamify(replaceName(/\.js/g, '.min.js')))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch(['./lib/**/*.js'], ['js']);
});
