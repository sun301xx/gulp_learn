

###1.命令行init创建npm配置文件 ----> npm init

###2.添加一个gulp依赖 ----> npm install gulp --save-dev （提前安装好全局的gulp :npm install -g gulp）

###3.在项目根目录中创建gulpfile.js文件 -----> do it yourself

###4.在gulpfile.js文件中创建如下代码

***

    `var gulp    = require('gulp');
    var less    = require('gulp-less');
    var nano    = require('gulp-cssnano');
    var concat  = require('gulp-concat');
    var uglify  = require('gulp-uglify');
    var htmlmin = require('gulp-htmlmin');`

    `gulp.task('style',function(){
    gulp.src('src/styles/*_.less')
    .pipe(less())  
    .pipe(nano())  
    .pipe(gulp.dest('dist/styles'));
     });`
 
 ***
###5.在mac终端 或者 window的cmd中 输入 gulp style 运行 gulp

