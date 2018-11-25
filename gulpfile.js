const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('sass', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('./css'))
});


gulp.task('sass-watch', (done) => {
  gulp.watch('./sass/**/*.scss', gulp.task('sass'));
  done();
});


gulp.task('default', gulp.parallel('sass', 'sass-watch'));
