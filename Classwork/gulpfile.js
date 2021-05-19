import gulp     from 'gulp';
import scss     from 'gulp-sass';
import include  from 'gulp-file-include';
import rename   from 'gulp-rename'
import del      from 'del';
import autopref from 'gulp-autoprefixer';
import gmedia   from 'gulp-group-css-media-queries';
import cleancss from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import sync     from 'browser-sync';

export const html = () => {
    return gulp.src(['dev/*.html', '!dev/_*.html'])
        .pipe(include())
        .pipe(gulp.dest('dist'))
        .pipe(sync.stream())
}

export const css = () => {
    return gulp.src('dev/scss/style.scss')
        .pipe(scss({outputStyle: 'expanded'})) //expanded or compressed
        .pipe(gmedia())
        .pipe(autopref({
            overrideBrowserlist: ['last 5 version'],
            cascade: true,
            grid: true
        }))
        .pipe(gulp.dest('dist/css'))

        .pipe(cleancss())
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('dist/css'))

        .pipe(sync.stream())
}

export const js = () => {
    return gulp.src('dev/js/main.js')
    .pipe(include())
    //TODO: minify
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('dist/js'))
    .pipe(sync.stream())
}

export const img = () => {
    return gulp.src('dev/img/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest('dist/img'))
}

export const bsync = () => {
    sync.init({
        ui: false,
        notify: false,
        server : {
            baseDir: "dist/"
        }
    })
}

export const watch = () => {
    gulp.watch(['dev/**/*.html'], html);
    gulp.watch(['dev/scss/**/*.scss'], css);
    gulp.watch(['dev/js/**/*.js'], js);
    gulp.watch(['dev/img/**/*.{jpg,png,svg,gif,ico,webp}'], img)
}

export const deldist = () => { return del('dist') }
export const build = gulp.series(deldist, gulp.parallel(html, css, js, img));
export default gulp.series(build, gulp.parallel(bsync, watch));