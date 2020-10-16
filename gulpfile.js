const gulp = require('gulp');
const html = require('gulp-html');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const imgmin = require('gulp-imagemin');
const sass= require('gulp-sass');

function fnCopyIndex(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
}
function fnCss(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'));
}

function fnImg(){
    return gulp.src('./src/img/*')
    .pipe(imgmin())
    .pipe(gulp.dest('./dist/img'));
}

function fnWatch(){
 gulp.watch('./src/index.html',fnCopyIndex);
 gulp.watch('./src/sass/*.scss',fnCss);
 gulp.watch('./src/img/*',fnImg);
}
exports.copyIndex = fnCopyIndex;
exports.css = fnCss;
exports.img = fnImg;
exports.default = fnWatch;