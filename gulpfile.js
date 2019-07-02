const gulp = require('gulp'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      watch = require('gulp-watch'),
      concat = require('gulp-concat'),
      autoprefixer = require('gulp-autoprefixer'),
      cleancss = require('gulp-clean-css'),
	  uglify = require('gulp-uglify-es').default,
	  browserSync = require('browser-sync'),
	  syntax = 'sass',
	  babel = require('gulp-babel');

gulp.task('sass-compile', () => {
    return gulp.src('app/styles/'+syntax+'/**/*.'+syntax+'')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('app/styles/css'))
	.pipe(browserSync.stream())
});
// Расскомитить, когда начнешь писать js код
// gulp.task('js-common', () => {
// 	return gulp.src(['app/js/common.js'])
// 	.pipe(babel({
// 		presets: ['es2015']
// 	}))
// 	.pipe(gulp.dest('app/js/es'))
// 	// .pipe(browserSync.reload({ stream: true }));
// })

// gulp.task('js', function(done) {
// 	return gulp.src(['app/js/swiper/*.js', 'app/js/tel_mask/*.js', 'app/js/sliders/*.js', 'app/js/es/common.js'])
// 	.pipe(concat('libs.min.js'))
// 	.pipe(uglify()) // Minify js
// 	.pipe(gulp.dest('app/js'))
// 	.pipe(browserSync.reload({ stream: true }));
// });

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('html-reload', function() {
	return gulp.src('app/*.html')
	.pipe(browserSync.stream());
});

gulp.task('watch', () => {
    gulp.watch('app/styles/'+syntax+'/**/*.'+syntax+'', gulp.series('sass-compile'));
	// gulp.watch(['app/js/maps/*.js', 'app/js/swiper/*.js', 'app/js/tel_mask/*.js', 'app/js/sliders/*.js', 'app/js/es/common.js'], gulp.series('js'));
	// gulp.watch(['app/js/common.js'], gulp.series('js-common'));
	gulp.watch('app/*.html', gulp.series('html-reload'));
});

gulp.task('default', gulp.parallel('watch', 'sass-compile', 'browser-sync'));
//  'js', 'js-common'