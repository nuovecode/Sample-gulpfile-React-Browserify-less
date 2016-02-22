var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var less   = require('gulp-less');
var notify = require('gulp-notify');

gulp.task('browserify', function(){
    gulp.src('script/App.js')
        .pipe(browserify({transform: 'reactify'}))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('js'))
});

gulp.task('css', function() {
    return gulp.src('less/style.less')
        .pipe(less().on('error', notify.onError(function (error) {
            return 'LESS error: ' + error.message;
        })))
        .pipe(gulp.dest('css'))
        .pipe(notify({
            message: 'LESS: ok'
        }));
});

gulp.task('default', ['browserify']);

gulp.task('watch', function(){
    gulp.watch('script/*', ['default']);
    gulp.watch('less/*', ['css']);
});

