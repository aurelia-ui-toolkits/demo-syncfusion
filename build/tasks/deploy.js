var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('deploy-gh-pages', function () {
  return gulp.src([
      './src/**/*',
      './styles/*.*',
      './images/**/*',
      './doc/*.*',
      './jspm_packages/*.js', // include system.js
      './jspm_packages/github/twbs/bootstrap@*/fonts/*',
      './jspm_packages/npm/font-awesome@*/**/*',
      './jspm_packages/npm/font-awesome*.js',
      'jspm_packages/npm/bluebird@*/js/browser/bluebird.min.js',
      'jspm_packages/npm/syncfusion-javascript@*/**/*',
      'jspm_packages/npm/syncfusion-ej-global@*/**/*',
      './jspm_packages/npm/jquery-validation*.js',
      './jspm_packages/npm/jquery-validation*/**/*',
      './jspm_packages/github/PrismJS/prism*/themes/*.css',
      './jspm_packages/github/google/code-prettify*/**/*',
      './jspm_packages/npm/babel-runtime*/**/*',
      './index.html',
      './error.html',
      './images/favicon.ico',
      './config.js'
      //'./web.config' // to include the mime type for  the md files
    ], {
      base: '.'
    })
    // .pipe(gulp.dest('./dist')); // for test purposes
    .pipe(ghPages()); // to publish as GitHub pages
});



gulp.task('deploy', function () {
  return runSequence(
    'clean',
    'unbundle',
    'bundle',
    'deploy-gh-pages',
    'unbundle',
    'clean'
  );
});