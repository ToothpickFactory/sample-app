var package_json    = require('./package.json');
var gulp            = require('gulp');
var gutil           = require('gulp-util');
var concat          = require('gulp-concat');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var minifyCss       = require('gulp-minify-css');
var rename          = require('gulp-rename');
var webserver       = require('gulp-webserver');

var embedTemplates = require('gulp-angular-embed-templates');
var babel = require("gulp-babel");
var plumber = require("gulp-plumber");


var paths = {
  sassMain: ['./src/app.scss'],
  sass: ['./src/**/*.scss'],
  js: ['./src/**/*.js'],
  component: ['./src/**/*.js', './src/**/*.html'],
	vendors: package_json["client-vendor-paths"]
};


gulp.task('default', ['sass', 'component', 'vendor']);

gulp.task('vendor', function(){
	gulp.src(paths.vendors)
		.pipe(concat('vendors.js'))
		.pipe(gulp.dest('./dist/js'))
})

gulp.task('component', function() {
  gulp.src(paths.js)
    .pipe(embedTemplates({
      sourceType:'js',
      minimize: {
        empty: true,
        spare: true,
        quotes: true,
        dom: {
          lowerCaseAttributeNames: false,
          lowerCaseTags: false
        }
      }
    }))
    .pipe(plumber())
    .pipe(babel({presets: ['es2015']}))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('sass', function(done) {
  gulp.src(paths.sassMain)
    .pipe(sass()).on('error', sass.logError)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('./dist/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.component, ['component']);
});

gulp.task('serve', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.component, ['component']);
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
