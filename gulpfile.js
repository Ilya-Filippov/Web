var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlMin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress');
function defaultTask(cb) {
  cb();
}
gulp.task('minify-css', function (done) {
  return gulp.src('./css/*.css')
  .pipe(cleanCSS({
    compatibility: 'ie8'
  }))
  .pipe(gulp.dest('dist/css/'))
  done();
});
gulp.task('move-js',function (done) {
  return gulp.src('./js/*.js')
  .pipe(gulp.dest('dist/js/'))
  done();
});
gulp.task('htmlmin',function (done) {
  return gulp.src('*.html')
  .pipe (htmlMin({
    collapseWhitespace:true
  }))
  .pipe(gulp.dest('dist/'))
  done();
});
gulp.task('fonts',function (done) {
  return gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
  done();
});
gulp.task('tinypng', function (done) {
    gulp.src('./img/**/*.{png,jpg,jpeg}')
        .pipe(tinyPNG({
            key: '7f6BDcPMM2cq3TQhb7p4t35QN7pc8ct2',
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('dist/img/'));
});


exports.default = defaultTask;
