

const gulp       = require('gulp'),
      webpack    = require('webpack-stream'),
      sass       = require('gulp-sass'),
      minifyCSS  = require('gulp-clean-css'),
      prefixer   = require('gulp-autoprefixer'),
      connect    = require('gulp-connect'),
      rename     = require('gulp-rename'),
      del        = require('del');

const base_path  = './',
      src        = base_path + 'dev/src',
      dist       = base_path + 'docs';

gulp.task('connect', function(){
  connect.server({
    root: dist,
    livereload: true
  });
});

gulp.task('html', function(){
  return gulp.src(src + '/*.html')
    .pipe(gulp.dest( dist + '/'))
    .pipe(connect.reload());
});

gulp.task('images', function(){
  return gulp.src( src + '/images/**/*' )
    .pipe(gulp.dest( dist + '/assets/images/' ))
    .pipe(connect.reload());
});

gulp.task('threed-models', function(){
  return gulp.src(src + '/threedmodels/**/*')
    .pipe(gulp.dest(dist + '/assets/threedmodels/'))
});

gulp.task('sass', function(){
  return gulp.src(src + '/stylesheet/*.scss')
    .pipe(sass({
      includePaths: ['node_modules/bootstrap-sass/assets/stylesheets/bootstrap']
    }))
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
    .pipe(gulp.dest(dist + '/assets/css/'))
    .pipe(connect.reload());
});

gulp.task('app-scripts', function(){
  return gulp.src( src + '/javascript/app.js' )
    .pipe(webpack( require('./webpack.config.js' )))
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest(dist + '/assets/js/'))
    .pipe(connect.reload());
});

gulp.task('clean', function(){
  return del('docs/*');
});

gulp.task('watch', function(){
  gulp.watch( src + '/*.html', ['html'] );
  gulp.watch( src + '/stylesheet/*.scss', ['sass'] );
  gulp.watch( src + '/javascript/app.js', ['app-scripts'] );
});

gulp.task('default', ['clean'], function(){
  gulp.start(
    'html',
    'images',
    'threed-models',
    'sass',
    'app-scripts',
    'connect',
    'watch'
  );
});