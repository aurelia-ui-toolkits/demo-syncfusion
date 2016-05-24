var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('deploy-gh-pages', function() {
  return gulp.src([
    './src/**/*',
    './styles/*.*',
    './images/*.*',
    './doc/*.*',
    './jspm_packages/*.js', // include system.js
    './jspm_packages/github/twbs/bootstrap@*/fonts/*',
    './jspm_packages/npm/font-awesome@*/**/*',
    './jspm_packages/npm/font-awesome*.js',
	'jspm_packages/npm/bluebird@*/js/browser/bluebird.min.js',
	'vendors/**/*',
	//'./jspm_packages/github/syncfusion/**/*',
    './jspm_packages/github/PrismJS/prism*/themes/*.css',
    './jspm_packages/github/google/code-prettify*/loader/**/*',
    './jspm_packages/npm/babel-runtime*/**/*',
    './index.html',
    './favicon.ico',
    './config.js'
  ], { base: '.' })
    .pipe(gulp.dest('./dist')); // for local deployment
   // .pipe(ghPages()); // to publish as GitHub pages
});



gulp.task('deploy', function() {
  return runSequence(
    'clean',
    'unbundle',
    'bundle',
    'deploy-gh-pages',
    'unbundle',
    'clean'
  );
});
