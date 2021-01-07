#!/usr/bin/env node

'use strict';

var
    autoprefixer = require('autoprefixer'),
    browserSync = require('browser-sync').create(),
    debug = require('gulp-debug'),
    postcss = require('gulp-postcss'),
    program = require('commander'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    stylus = require('gulp-stylus'),
    path = require('path'),
    util = require('gulp-util'),
    watch = require('gulp-watch'),
    { src, dest, series, parallel } = require("gulp");

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


/* ######################## COMMANDER WATCH PUG ######################## */
/*  node ./bin/watch.js w-templates \"frontend/src/templates/*.pug\" \"frontend/src/templates//*.pug\" --wt \"docs/\"" */
program
    .command('w-templates <input>')
    .option("--wt [options]")
    .action((input, options) => {
        var input = options.input || options.parent.rawArgs;
        var ouput = options.ouput || options.wt;

        input = input.filter(function (index, value) {
            if (path.extname(index) == ".pug") {
                return index;
            }
        });
        if(input.length === 0 || input === "undefine") {
            return util.log("ERROR: No existe el archivo con el siguiente formato: '.pug'")
        }
        else {
            return src(input, { allowEmpty: true })
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
                .pipe(dest(ouput))
                .pipe(browserSync.stream())
                .on('finish', function () {
                    util.log('Done!');
                });
        }
        



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
            if (path.extname(index) == ".scss") {
                return index;
            }
        });
        if(input.length === 0 || input === "undefine") {
            return util.log("ERROR: No existe el archivo con el siguiente formato: '.scss'")
        }
        else {
            return src(input, { allowEmpty: true })
                .pipe(debug({
                    title: 'commader-gulp-watch:'
                }))
                .pipe(watch(input))
                .pipe(sass())
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
                .pipe(dest(ouput))
                .pipe(browserSync.stream())
                .on('finish', function () {
                    util.log('Done!');
                });
        }
        
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
            if (path.extname(index) == ".styl") {
                return index;
            }
        });
        if(input.length === 0 || input === "undefine") {
            return util.log("ERROR: No existe el archivo con el siguiente formato: '.styl'")
        }
        else {
            return src(input, { allowEmpty: true })
                .pipe(debug({
                    title: 'commader-gulp-watch:'
                }))
                .pipe(watch(input))
                .pipe(stylus())
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
                .pipe(dest(ouput))
                .pipe(browserSync.stream())
                .on('end', function () {
                    util.log('Done!');
                });
        }   
        
    })



program.parse(process.argv);