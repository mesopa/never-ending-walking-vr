

const gulp       = require('gulp'),
      webpack    = require('webpack-stream'),
      sass       = require('gulp-sass'),
      rename     = require('gulp-rename'),
      minifyCSS  = require('gulp-clean-css'),
      prefixer   = require('gulp-autoprefixer'),
      eyeglass   = require('eyeglass'),
      uglify     = require('gulp-uglify'),
      del        = require('del');

const base_path  = './',
      src        = base_path + 'dev/src',
      dist       = base_path + 'dist/assets';

const sassOptions = {
      // put node-sass options you need here.
      eyeglass: {
        // put eyeglass options you need here.
      }
};

gulp.task('html', function(){
  return gulp.src(src + '/*.html')
    .pipe(gulp.dest(base_path + 'dist/'));
});

gulp.task('threed-models', function(){
  return gulp.src(src + '/threedmodels/**/*')
    .pipe(gulp.dest(dist + '/threedmodels/'))
});

gulp.task('sass', function(){
  return gulp.src(src + '/stylesheet/*.scss')
    .pipe(sass(eyeglass(sassOptions)).on("error", sass.logError))
    .pipe(prefixer(
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24',
          'Explorer >= 8',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6'
    ))
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(dist + '/css/'));
});

gulp.task('aframe-components', function(){
  return gulp.src(src + '/javascript/aframe-components.js')
    .pipe(webpack())
    .pipe(uglify())
    .pipe(rename('aframe-components.min.js'))
    .pipe(gulp.dest(dist + '/js/'));
});

gulp.task('bootstrap', function(){
  return gulp.src(src + '/javascript/bootstrap.js')
    .pipe(webpack())
    .pipe(uglify())
    .pipe(rename('bootstrap.min.js'))
    .pipe(gulp.dest(dist + '/js/'));
});

gulp.task('clean', function(){
  return del('dist/*');
});

gulp.task('default', ['clean'], function(){
  gulp.start('html', 'threed-models', 'sass', 'aframe-components', 'bootstrap');
});