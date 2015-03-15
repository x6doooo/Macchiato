'use strict';

var gulp = require('gulp');

var moduleName = 'macchiato';

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license']
});


gulp.task('html:dev', function() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('.tmp'))
});

gulp.task('scripts:dev', function() {
    return gulp.src('src/**/*.js')
        .pipe(gulp.dest('.tmp'))
});

gulp.task('styles:dev', function() {
    return $.rubySass('src/styles', {
        sourcemap:true
    })
        .on('error', function (err) { console.log(err.message); })
        .pipe($.sourcemaps.write('.', {
            includeContent:false,
            sourceRoot:'../../src/styles'
        }))
        .pipe(gulp.dest('.tmp/styles'));
});

gulp.task('watch:dev', function() {
    gulp.watch('src/**/*.html', ['html:dev']);
    gulp.watch(['src/styles/**/*.sass', 'src/styles/**/*.scss'], ['styles:dev']);
    gulp.watch(['src/scripts/**/*.js'], ['scripts:dev']);
});

gulp.task('open:dev', function() {
    return gulp.src('.tmp/index.html')
        .pipe($.open('', {
            url: 'http://localhost:9527',
            app: 'google chrome'
        }));
});

gulp.task('vendor:dev', function() {
    return gulp.src('vendor/**/*')
        .pipe(gulp.dest('.tmp/vendor'))
})

gulp.task('serve:dev', [
    'html:dev', 'styles:dev', 'scripts:dev',
    'vendor:dev'
], function() {
    gulp.start('watch:dev');
    $.connect.server({
        port: 9527,
        root: '.tmp',
        livereload: true,
        middleware: function(connect) {
            return [
                require('./server/devServer')('.tmp')
            ];
        }

    });
    gulp.start('open:dev')
});


/////////////////////////////////////////////////////


gulp.task('scripts', function () {
    return gulp.src('src/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.size());
});

gulp.task('partials', function () {
    return gulp.src('src/**/*.html')
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe($.ngHtml2js({
            moduleName: moduleName
        }))
        .pipe(gulp.dest('.tmp'))
        .pipe($.size());
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
        .pipe(gulp.dest('.tmp/styles'));
});

gulp.task('html', ['scripts', 'partials'], function () {
    var htmlFilter = $.filter('*.html');
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');
    var assets;

    return gulp.src(['src/*.tpl', 'src/*.html'])
        .pipe($.inject(gulp.src('.tmp/**/*.js'), {
            read: false,
            starttag: '<!-- inject:partials -->',
            addRootSlash: false,
            addPrefix: '../'
        }))
        .pipe(assets = $.useref.assets())
        .pipe($.rev())
        /*
        .pipe($.rename(function(p) {
            p.basename = p.basename.replace(/\-.+/g, '');
            p.basename += '-' + new Date() * 1;
        }))
        */
        .pipe(jsFilter)
        .pipe($.ngAnnotate())
        .pipe($.uglify({preserveComments: $.uglifySaveLicense}))
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace({
            replaceInExtensions: ['.js', '.css', '.html', '.hbs', '.php', '.tpl']
        }))
        .pipe(htmlFilter)
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(htmlFilter.restore())
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});

gulp.task('images', function () {
    return gulp.src('src/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size());
});

gulp.task('fonts', function () {
    return gulp.src($.mainBowerFiles())
        .pipe($.filter('src/**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe($.flatten())
        .pipe(gulp.dest('dist/fonts'))
        .pipe($.size());
});

gulp.task('json', function() {
    return gulp.src('src/json/**/*')
        .pipe(gulp.dest('dist/json'));
});

gulp.task('clean', function () {
    return gulp.src(['.tmp', 'dist'], { read: false }).pipe($.rimraf());
});

gulp.task('build', ['html', 'partials', 'images', 'fonts', 'json']);
