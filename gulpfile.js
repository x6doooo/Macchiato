/**
 * Created by dx.yang on 15/3/8.
 */

var gulp = require('gulp');
//var amdOptimize = require("amd-optimize");

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
});

gulp.task('clean', function() {
    return gulp.src(['tmp', 'build'], { read: false })
        .pipe($.clean());
});

gulp.task('scripts:dev', function() {
    return gulp.src('src/scripts/**/*')
        .pipe(gulp.dest('tmp/scripts'));
});

gulp.task('vendor:dev', function() {
    return gulp.src('vendor/**/*')
        .pipe(gulp.dest('tmp/vendor'));
});

// dev
gulp.task('sass', function() {
    return $.rubySass('src/styles', {
        sourcemap:true
    })
    .on('error', function (err) { console.log(err.message); })
    .pipe($.sourcemaps.write('.', {
        includeContent:false,
        sourceRoot:'../../src/styles'
    }))
    .pipe(gulp.dest('tmp/styles'));
});

gulp.task('html:dev', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('tmp/'));
});

gulp.task('watch:dev', function() {
    gulp.watch('src/*.html', ['html:dev']);
    gulp.watch('src/styles/**/*', ['sass']);
    gulp.watch('src/scripts/**/*', ['scripts:dev']);
});

gulp.task('serve:dev', [
    'html:dev', 'sass', 'scripts:dev', 'vendor:dev'
], function() {
    gulp.start('watch:dev');
    $.connect.server({
        port: 9527,
        root: 'tmp',
        livereload: true
    });
});

// build


gulp.task('css:tmp', function() {
    return gulp.src(['vendor/**/*.css', 'src/styles/**/*.css'])
        .pipe(gulp.dest('tmp/styles'));
});

gulp.task('css:build', ['html', 'sass', 'css:tmp'], function() {
    var assets = $.useref.assets();
    return gulp.src('tmp/*.html')
        .pipe(assets)
        .pipe($.if('*.css', $.minifyCss()))
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest('build'));
});

gulp.task('requirejs', function() {
    var config = require('./src/scripts/main.js');
    config.baseUrl = 'src/scripts';
    config.out = 'macchiato.js';
    config.name = 'bootstrap';
    return $.requirejs(config)
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['clean'], function() {
    gulp.start('serve:dev');
});

gulp.task('build', ['html', 'requirejs', 'css:build']);