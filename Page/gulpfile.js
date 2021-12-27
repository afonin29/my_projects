/* 
 * watch(... ,{ delay: 500, ignoreInitial: false }, ...)
 *  delay - задержка;
 *  ignoreInitial - если false, то выполнить немедленно, не дожидаясь изменений;
*/
// набираем "gulp" - для запуска в терминале
// ctrl+c - остановить в терминале

const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));


function build() {
  return gulp.src('styles/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('styles/'));
};

function watch() {
  gulp.watch("styles/*.scss", { delay: 500, ignoreInitial: false }, build);
}


exports.default = watch;