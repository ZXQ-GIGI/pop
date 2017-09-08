const gulp              = require('gulp');
const uglify            = require('gulp-uglify');
const rename            = require('gulp-rename');
const ts                = require('gulp-typescript');
const browserify        = require('gulp-browserify');
// const filter            = require('gulp-filter');
const clean             = require('gulp-clean-old');
const http              = require('http');
const path              = require('path');
const exec              = require('child_process').exec;
const httpStaticServer  = require('static-server-nodejs');

const optputpath    = 'dist';
const cachepath     = 'cache';
const scriptsource  = 'src/**/*.ts';
const cachesource   = 'cache/pop.js';
const docport       = 10034 ;

gulp.task('cmd_complied', function() {
    return gulp.src( scriptsource )
        .pipe(ts({
            noImplicitAny: true,
            module : "commonjs",
        }))
        .pipe(gulp.dest(cachepath));
});

gulp.task('cmd_link',['cmd_complied'], function() {
    return gulp.src(cachesource)
        .pipe(browserify({
          insertGlobals : false,
        }))
        .pipe(gulp.dest(optputpath))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest(optputpath));
});

gulp.task('amd', function() {
    return gulp.src( scriptsource )
        .pipe(ts({
            noImplicitAny: true,
            module : "amd",
            out : "pop.amd.js"
        }))
        .pipe(gulp.dest(optputpath))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest(optputpath));

});

gulp.task('common', [ "cmd_link" ],function(){
    return gulp.src( cachepath + '/*', {
            read : false
        })
        .pipe(clean());
});

gulp.task('default', [ "common", "amd" ]);

gulp.task('doc',['default'],function(){
    var service = httpStaticServer(path.join(__dirname, ''),{
        cors: true,
        cache: true,
        indexFile: 'index.html',
        verbose: true
    }).listen(docport, '127.0.0.1', function(){
        exec("open http://127.0.0.1:"+docport);
    });
})
