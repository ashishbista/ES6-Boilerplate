var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var eslint = require('gulp-eslint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var serve = require('gulp-serve');

function compileAndBundleCss(){
  gulp.src('./src/stylesheets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('application.css'))
    .pipe(gulp.dest('./build/stylesheets/'));
}

function compileAndBundleJs(){
  var bundler = browserify('./src/javascripts/app.js', { debug: true }).transform(babel, {presets: ['es2015']});
  bundler.bundle()
    .on('error', function(err) { console.error(err); this.emit('end'); })
    .pipe(source('application.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/javascripts/'));
}

function build(){
  compileAndBundleJs();
  compileAndBundleCss();
}

function lint(){
  return gulp.src(['./src/**/*.js'])
    .pipe(eslint('./.estlintrc'))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
}

gulp.task('lint', function () { return lint(); });
gulp.task('build', function() { return build(); });
gulp.task('compileAndBundleJs', function() { return compileAndBundleJs(); });
gulp.task('compileAndBundleCss', function() { return compileAndBundleCss(); });

gulp.task('watch', function() {
  compileAndBundleJs();
  gulp.watch('./src/javascripts/**/*.js', ['compileAndBundleJs']);
  compileAndBundleCss();
  gulp.watch('./src/stylesheets/**/*.scss', ['compileAndBundleCss']);
});

gulp.task('serve', serve('build'));

gulp.task('default', ['watch']);
