const browserSync = require('browser-sync').create();
const gulp = require('gulp'); 
const { watch } = require('gulp');

gulp.task('server', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })

    watch('app/*.html').on('change', browserSync.reload)
    watch('app/css/**/*').on('change', browserSync.reload)
    watch('app/js/**/*').on('change', browserSync.reload)
})


gulp.task('default', gulp.series(['server']));