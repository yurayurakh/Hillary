"use strict";

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    concatCss = require('gulp-concat-css'),
    minifyCSS = require('gulp-minify-css'),
    prefix = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    concatjs = require('gulp-concat'),
    minifyjs = require('gulp-minify'),
    plumber = require('gulp-plumber'), //(Предохраняем Gulp от вылета)
    imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    imageminPngquant = require('imagemin-pngquant');


// Создадим переменную с настройками плагина plumber для захвата ошибок
var plumberOptions = {
    handleError: function (err) {
        console.log(err);
        this.emit('end');
    }
};

// Concat js
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(concatjs('common.js'))
        .pipe(minifyjs(''))
        .pipe(gulp.dest('dist/js/'))
        .pipe(connect.reload());
});

//Local Server(localhost:8080)
gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

// Sass
gulp.task('sass', function () {
    gulp.src('src/sass/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(concatCss("style.css"))
        .pipe(prefix('last 15 versions'))
        .pipe(minifyCSS(''))
        .pipe(gulp.dest('dist/css/'))
        .pipe(connect.reload());
});


//Html
gulp.task('html', function(){
    gulp.src('dist/*.html')
        .pipe(plumber())
        .pipe(connect.reload());
});

//Watch
gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('dist/*.html', ['html']);
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/img/**/*.*', ['img']);
});

// Таск для оптимизации изображений
gulp.task('img', function () {
    return gulp.src('src/img/**/*.*')
        .pipe(debug({title: 'building img:', showFiles: true}))
        .pipe(plumber(plumberOptions))
        .pipe(gulp.dest('dist/img/'))
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imageminJpegRecompress({
                progressive: true,
                max: 80,
                min: 70
            }),
            imagemin.svgo({
                plugins: [
                    {
                        removeViewBox: false,
                        cleanupAttrs: true,
                        removeComments: true,
                        removeTitle: true,
                        removeDesc: true,
                        removeEmptyAttrs: true,
                        minifyStyles: true,
                        convertColors: true
                    }
                ]
            }),
            imageminPngquant({quality: '80'})
        ]))
        .pipe(gulp.dest('dist/img/'));
});

gulp.task('default', ['connect', 'html', 'sass', 'scripts', 'watch']);