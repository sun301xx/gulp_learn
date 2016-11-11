/**
 *  Author : chao sun
 *  create time: 2016-11-11
 *  
 */
'use strict';
/**
 *  1. Less 编译压缩 合并
 *  2. JS合并 压缩 混淆
 *  3. img复制
 *  4. html 压缩
 *  
 */
		var gulp    = require('gulp');
		var less    = require('gulp-less');
		var nano    = require('gulp-cssnano');
		var concat  = require('gulp-concat');
		var uglify  = require('gulp-uglify');
		var htmlmin = require('gulp-htmlmin');

     // 1. Less 编译压缩 合并
     gulp.task('style',function(){
        //自动执行 style
        gulp.src('src/styles/*_.less')
        .pipe(less())
        .pipe(nano())
        .pipe(gulp.dest('dist/styles'));
     });
     // 2. JS合并 压缩 混淆
     gulp.task('script',function(){
        gulp.src('src/scripts/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
     });
     // 3. 图片复制输出
     gulp.task('img',function(){
        gulp.src('src/images/*.*')
        .pipe(gulp.dest('dist/images'));
     });
      // 4. html 压缩
     gulp.task('html',function(){
        gulp.src('src/*.html')
        .pipe(htmlmin(
           {collapseWhitespace: true}
        	))
        .pipe(gulp.dest('dist/'));
     });


