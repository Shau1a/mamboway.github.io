const 	gulp         = require('gulp'), // Подключаем Gulp
		browserSync  = require('browser-sync'), // Подключаем Browser Sync
		concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
		uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
		cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
		rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
		del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
		imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
		pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
		jpegtran 	 = require('imagemin-jpegtran'),
		cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
		autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
		cleanCSS 	 = require('gulp-clean-css'),
		htmlmin 	 = require('gulp-htmlmin');


gulp.task('clean', function() {
    return del(['dist/*']); 
});

gulp.task('styles', function() {
	return gulp.src('app/css/**/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cleanCSS( {
			level : 2
		}))
		.pipe(gulp.dest('dist/css'));
})


gulp.task('scripts', function () {
    return gulp.src('app/js/**/*')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('imgs', function() {
    return gulp.src('app/images/**/*')
        .pipe(cache(imagemin({
        	interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant(), jpegtran()]
        })))
        .pipe(gulp.dest('dist/images'))
});

gulp.task('html', function() {
  	return gulp.src('app/*.html')
	    .pipe(htmlmin({ collapseWhitespace: true }))
	    .pipe(gulp.dest('dist'));
});

gulp.task('prebuild', function() {
	let font = gulp.src('app/font/**')
		.pipe(gulp.dest('dist/font'));
	let music = gulp.src('app/music/**/**')
		.pipe(gulp.dest('dist/music'));
	let jq = gulp.src('app/libs/jquery.min.js')
		.pipe(gulp.dest('dist/libs'));
	let whyDontyouWantToUglify = gulp.src('app/js/script.js')
		.pipe(gulp.dest('dist/js'));
})

gulp.task('watch', function() {
	gulp.watch('app/css/**/*.css', gulp.parallel('styles'));
	gulp.watch('app/js/**/*.js', gulp.parallel('scripts'));
});

gulp.task('build', gulp.series('clean', gulp.parallel('prebuild', 'imgs', 'styles', 'scripts', 'html')));