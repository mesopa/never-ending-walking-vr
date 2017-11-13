

const gulp       = require('gulp'),
      jshint     = require('gulp-jshint'),
      concat     = require('gulp-concat'),
      uglify     = require('gulp-uglify'),
      rename     = require('gulp-rename'),
      browserify = require('browserify');

const base_path  = './',
      src        = base_path + 'dev/src';

gulp.task('html', function(){
  return gulp.src(src + '/*.html')
      .pipe(gulp.dest(base_path + 'dist/'));
})