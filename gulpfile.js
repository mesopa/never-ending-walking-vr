// -----------------
// Project Variables
// -----------------

const { src, dest, series, parallel, watch } = require('gulp');

const webpack    = require('webpack-stream'),
      sass       = require('gulp-sass'),
      minifyCSS  = require('gulp-clean-css'),
      htmlmin    = require('gulp-htmlmin'),
      connect    = require('gulp-connect'),
      rename     = require('gulp-rename'),
      del        = require('del');

const base_path  = '',
      source     = base_path + 'dev/src',
      dist       = base_path + 'docs';

// -------------
// Project Tasks
// -------------

// Local Server
function connectServer() {
  connect.server({
    root: dist,
    livereload: true
  });
};

function html() {
  return src( source + '/*.html' )
    .pipe( htmlmin({
      collapseWhitespace: true,
      minifyCSS: true
    }))
    .pipe( dest( dist + '/'))
    .pipe( connect.reload());
};

function images() {
  return src( source + '/images/**/*' )
    .pipe( dest( dist + '/assets/images/' ) )
    .pipe( connect.reload());
};

function threedModels() {
  return src( source + '/threedmodels/**/*' )
    .pipe( dest(dist + '/assets/threedmodels/') )
};

function sassStyles() {
  return src( source + '/stylesheet/*.scss' )
    .pipe( sass({
      includePaths: ['node_modules/bootstrap-sass/assets/stylesheets/bootstrap']
    }))
    .pipe( minifyCSS({
      level: {1: {specialComments: 0}}
    }))
    .pipe( rename({
      suffix: '.min'
    }))
    .pipe( dest(dist + '/assets/css/'))
    .pipe( connect.reload());
};

function appScripts() {
  return src( source + '/javascript/app.js' )
    .pipe( webpack( require('./webpack.config.js' )))
    .pipe( rename('app.min.js'))
    .pipe( dest(dist + '/assets/js/'))
    .pipe( connect.reload());
};

function clean() {
  return del('docs/*');
};

// -- WATCH          --
function watchFiles() {
  watch( source + '/*.html', html );
  watch( source + '/stylesheet/*.scss', sassStyles );
  watch( source + '/javascript/app.js', appScripts );
};

// ------------------------------
// -- Project `default` Gulp Task
// ------------------------------

exports.default = series(
  clean,
  html,
  images,
  threedModels,
  sassStyles,
  appScripts,
  parallel(
    watchFiles,
    connectServer,
  ),
);