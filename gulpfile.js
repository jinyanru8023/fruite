const gulp = require('gulp');
const html = require('gulp-htmlmin');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const imgmin = require('gulp-imagemin');
const sass= require('gulp-sass');
const babel = require('gulp-babel');

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
function fnJs(){
    return gulp.src('./src/js/*.js')
    // .pipe(uglify())
    .pipe(rename({suffix : ' .min'}))
    .pipe(gulp.dest('./dist/js'));
}
function fnhtml(){
    return gulp.src('./src/pages/*.html')
    .pipe(html())
    .pipe(gulp.dest('./dist/pages'))
}
function fnWatch(){
 gulp.watch('./src/index.html',fnCopyIndex);
 gulp.watch('./src/sass/*.scss',fnCss);
 gulp.watch('./src/img/*',fnImg);
}
function fnBabel(){
    return gulp.src('./src/js/*')
    .pipe(babel({
        plugins: ['@babel/transform-runtime']
    }))
    .pipe(gulp.dest('./dist/js'))
}
exports.copyIndex = fnCopyIndex;
exports.css = fnCss;
exports.img = fnImg;
exports.js = fnJs;
exports.html = fnhtml;
exports.babel = fnBabel;
exports.default = fnWatch;