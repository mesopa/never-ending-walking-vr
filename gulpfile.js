

const gulp       = require('gulp'),
      webpack    = require('webpack-stream'),
      sass       = require('gulp-sass'),
      minifyCSS  = require('gulp-clean-css'),
      htmlmin    = require('gulp-htmlmin'),
      prefixer   = require('gulp-autoprefixer'),
      connect    = require('gulp-connect'),
      rename     = require('gulp-rename'),
      del        = require('del');

const base_path  = '',
      src        = base_path + 'dev/src',
      dist       = base_path + 'docs';

gulp.task('connect', () => {
  connect.server({
    root: dist,
    livereload: true
  });
});

gulp.task('html', () => {
  return gulp.src(src + '/*.html')
    .pipe( htmlmin({
      collapseWhitespace: true,
      minifyCSS: true
    }))
    .pipe( gulp.dest( dist + '/'))
    .pipe( connect.reload());
});

gulp.task('images', () => {
  return gulp.src( src + '/images/**/*' )
    .pipe( gulp.dest( dist + '/assets/images/' ))
    .pipe( connect.reload());
});

gulp.task('threed-models', () => {
  return gulp.src( src + '/threedmodels/**/*')
    .pipe( gulp.dest(dist + '/assets/threedmodels/'))
});

gulp.task('sass', () => {
  return gulp.src(src + '/stylesheet/*.scss')
    .pipe( sass({
      includePaths: ['node_modules/bootstrap-sass/assets/stylesheets/bootstrap']
    }))
    .pipe( prefixer({
      browsers: [
        'last 2 versions',
        '> 1%',
        'opera 12.1',
        'bb 10',
        'android 4'
        ]
    }))
    .pipe( minifyCSS({
      level: {1: {specialComments: 0}}
    }))
    .pipe( rename({
      suffix: '.min'
    }))
    .pipe( gulp.dest(dist + '/assets/css/'))
    .pipe( connect.reload());
});

gulp.task('app-scripts', () => {
  return gulp.src( src + '/javascript/app.js' )
    .pipe( webpack( require('./webpack.config.js' )))
    .pipe( rename('app.min.js'))
    .pipe( gulp.dest(dist + '/assets/js/'))
    .pipe( connect.reload());
});

gulp.task('clean', () => {
  return del('docs/*');
});

gulp.task('watch', () => {
  gulp.watch( src + '/*.html', ['html'] );
  gulp.watch( src + '/stylesheet/*.scss', ['sass'] );
  gulp.watch( src + '/javascript/app.js', ['app-scripts'] );
});

gulp.task('default', ['clean'], () => {
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