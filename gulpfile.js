const gulp = require('gulp');
const webpack = require('webpack');
const gutil = require('gulp-util');

const gulpCopy = require('gulp-copy');

gulp.task('html', () => {
    gulp.src('client/**/*.html', {base: './client'})
        .pipe(gulp.dest('public'));
});

gulp.task('css', () => {
    gulp.src('client/**/*.css', {base: './client'})
        .pipe(gulp.dest('public'));
});

gulp.task('webpack', () => {
    webpack(require('./webpack.config.js'), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString());
    });
});

gulp.task('watch', () => {
    gulp.watch(['client/**/*.html'], ['html']);
    gulp.watch(['client/**/*.js'], ['webpack']);
    gulp.watch(['client/**/*.css'], ['css']);
});

gulp.task('frontend', ['watch']);
gulp.task('default', ['frontend']);