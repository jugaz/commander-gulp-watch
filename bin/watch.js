#!/usr/bin/env node

'use strict';

var
    autoprefixer = require('autoprefixer'),
    browserSync = require('browser-sync').create(),
    gulp =  require('gulp'),
    mkdirp = require('mkdirp'),
    postcss = require('gulp-postcss'),
    program = require('commander'),
    pug = require('gulp-pug'),
    rimraf = require('rimraf'),
    sass = require('gulp-sass'),
    stylus = require('gulp-stylus'),
    util = require('gulp-util'),
    debug = require('gulp-debug'),
    watch = require('gulp-watch');

/* ######################## PLUGINS ######################## */
var Plugins = [
    autoprefixer({
        overrideBrowserslist: ['last 20 version']
    })
];


/* ####################### OPTIONS ######################## */
var options = {};


/* ######################## VERSION ######################## */
program

    .version(
        'gulp-watch-cli version: ' + require('../package.json').version + '\n'
    )
    .option('-m, --mkdirp <path>', 'create folder', createFolder)
    .option('-r, --rimraf <path>', 'delete folder', deleteFolder)


/* ######################## CREATE FOLDERS ######################## */
function createFolder(dir) {
    mkdirp(dir, function (err) {
        if (err) {
            console.error(err)
        } else {
            console.log(dir)
        }
    })
}


/* ######################## DELETE FOLDERS ######################## */
function deleteFolder(dir) {
    rimraf(dir, function (err) {
        if (err) {
            console.error(err)
        } else {
            console.log(dir)
        }
    })
}

/* ######################## COMMANDER WATCH PUG ######################## */
/*  node ./bin/watch.js w-templates \"frontend/src/templates/*.pug\" \"frontend/src/templates//*.pug\" --wt \"docs/\"" */
program
    .command('w-templates <input>')
    .option("--wt [options]")
    .action((input, options) => {
        var input = options.input || options.parent.rawArgs;
        var ouput = options.ouput || options.wt;
        input = input.filter(function (index, value) {
            if (index.slice((index.lastIndexOf(".") - 1 >>> 0) + 2) == "pug") {
                return index;
            }

        });

        return gulp.src(input)
            .pipe(debug({
                title: 'commader-gulp-watch:'
            }))
            .pipe(watch(input))
            .pipe(pug())
            .on('error', function (error) {
                // tenemos un error 
                util.log("Error Name:", error.name);
                util.log("Error Code:", error.code);
                util.log("Error Filename:", error.filename);
                util.log("Error Line:", error.line);
                util.log("Error Column:", error.column);
                util.log("Error Msg", error.Msg);;

            })
            .pipe(gulp.dest(ouput))
            .pipe(browserSync.stream())
            .on('finish', function () {
                util.log('Done!');
            });



    })
/* ######################## COMMANDER WATCH SCSS ######################## */
/*  node ./bin/watch.js w-scss \"frontend/src/static/styles/*.scss\" \"frontend/src/static/styles//*.scss\" --wscss \"docs/styles/\"" */
program
    .command('w-scss <input>')
    .option("--wscss [options]")
    .action((input, options) => {
        var input = options.input || options.parent.rawArgs;
        var ouput = options.ouput || options.wscss;
        input = input.filter(function (index, value) {
            if (index.slice((index.lastIndexOf(".") - 1 >>> 0) + 2) == "scss") {
                return index;
            }

        });
        return gulp.src(input)
            .pipe(debug({
                title: 'commader-gulp-watch:'
            }))
            .pipe(watch(input))
            .pipe(sass({
                outputStyle: 'compressed'
            }))
            .on('error', function (error) {
                // tenemos un error 
                util.log("Error Name:", error.name);
                util.log("Error Code:", error.code);
                util.log("Error Filename:", error.filename);
                util.log("Error Line:", error.line);
                util.log("Error Column:", error.column);
                util.log("Error Msg", error.Msg);

            })
            .pipe(postcss(Plugins))
            .pipe(gulp.dest(ouput))
            .pipe(browserSync.stream())
            .on('finish', function () {
                util.log('Done!');
            });
    })
/* ######################## COMMANDER WATCH LESS ######################## */
/*  "node ./bin/watch.js w-stylus \"frontend/src/static/styles/*.less\" \"frontend/src/static/styles//*.less\" --wstyl \"docs/styles/\"" */
program
    .command('w-less <input>')
    .option("--wl [options]")
    .action((input, options) => {
        var input = options.input || options.parent.rawArgs;
        var ouput = options.ouput || options.wl;
        input = input.filter(function (index, value) {
            if (index.slice((index.lastIndexOf(".") - 1 >>> 0) + 2) == "less") {
                return index;
            }

        });

        return gulp.src(input)
            .pipe(debug({
                title: 'commader-gulp-watch:'
            }))
            .pipe(watch(input))
            .pipe(less())
            .on('error', function (error) {
                // tenemos un error 
                util.log("Error Name:", error.name);
                util.log("Error Code:", error.code);
                util.log("Error Filename:", error.filename);
                util.log("Error Line:", error.line);
                util.log("Error Column:", error.column);
                util.log("Error Msg", error.Msg);

            })
            .pipe(postcss(Plugins))
            .pipe(gulp.dest(ouput))
            .pipe(browserSync.stream())
            .on('end', function () {
                util.log('Done!');
            });
    })

/* ######################## COMMANDER WATCH STYL ######################## */
/*  "node ./bin/watch.js w-stylus \"frontend/src/static/styles/*.styl\" \"frontend/src/static/styles//*.styl\" --wstyl \"docs/styles/\"" */
program
    .command('w-stylus <input>')
    .option("--wstyl [options]")
    .action((input, options) => {
        var input = options.input || options.parent.rawArgs;
        var ouput = options.ouput || options.wstyl;
        input = input.filter(function (index, value) {
            if (index.slice((index.lastIndexOf(".") - 1 >>> 0) + 2) == "styl") {
                return index;
            }

        });

        return gulp.src(input)
            .pipe(debug({
                title: 'commader-gulp-watch:'
            }))
            .pipe(watch(input))
            .pipe(stylus({
                compress: true
            }))
            .on('error', function (error) {
                // tenemos un error 
                util.log("Error Name:", error.name);
                util.log("Error Code:", error.code);
                util.log("Error Filename:", error.filename);
                util.log("Error Line:", error.line);
                util.log("Error Column:", error.column);
                util.log("Error Msg", error.Msg);

            })
            .pipe(postcss(Plugins))
            .pipe(gulp.dest(ouput))
            .pipe(browserSync.stream())
            .on('end', function () {
                util.log('Done!');
            });
    })



program.parse(process.argv);