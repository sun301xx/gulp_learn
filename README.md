

###1.命令行init创建npm配置文件 ----> npm init

###2.添加一个gulp依赖 ----> npm install gulp --save-dev （提前安装好全局的gulp :npm install -g gulp）

###3.在项目根目录中创建gulpfile.js文件 -----> do it yourself

###4.在gulpfile.js文件中创建如下代码

`
var gulp    = require('gulp');
    var less    = require('gulp-less');
    var nano    = require('gulp-cssnano');
    var concat  = require('gulp-concat');
    var uglify  = require('gulp-uglify');
    var htmlmin = require('gulp-htmlmin');

 // 建立任务
 gulp.task('style',function(){
    //自动执行 style
    gulp.src('src/styles/*_.less')// 告诉gulp处理源
    .pipe(less())   //less 转 css
    .pipe(nano())   //压缩css
    .pipe(gulp.dest('dist/styles'));//告诉gulp处理完成后文件放在什么位置
 });
 ...
`
###5.在mac终端 或者 window的cmd中 输入 gulp style 运行 gulp

