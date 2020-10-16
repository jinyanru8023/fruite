const gulp = require('gulp');
const html = require('gulp-html');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
// const uglify = require('gulp-uglify');
// const imgmin = require('gulp-imgagemin');
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
exports.copyIndex = fnCopyIndex;
exports.css = fnCss;
