# Commander Gulp Watch Dynamic

<p>This project is created to compile watch</p>
 
![MIT License](https://img.shields.io/badge/lincense-MIT-yellow?style=for-the-badge) 
![npm: version (tag)](https://img.shields.io/badge/npm-v6.4.3-blue?style=for-the-badge)
![gulp: version (tag)](https://img.shields.io/badge/gulp-v3.9.1-orange?style=for-the-badge)
![node License](https://img.shields.io/badge/node-v8.16.0-green?style=for-the-badge) 


## Installation

```bash
$ npm install commander-gulp-watch
```


#### Command to Compile

```bash
$ commander-gulp-watch w-templates 'entry' --wt 'ouput' 
```
```bash
$ commander-gulp-watch w-scss 'entry' --wscss 'ouput' 
```
```bash
$ commander-gulp-watch w-stylus 'entry' --wstyl 'ouput' 
```

#### Example

```bash
"scripts": {
   "watch": "npm run watch-templates watch-styles",
    "watch-sass": "commander-gulp-watch w-scss \"frontend/src/static/styles/*.scss\" \"frontend/src/static/styles/**/*.scss\" --wscss \"docs/styles/\"",
    "watch-stylus": "commander-gulp-watch w-stylus \"frontend/src/static/styles/*.styl\" \"frontend/src/static/styles/**/*.styl\" --wstyl \"docs/styles/\"",
    "watch-templates": "commander-gulp-watch w-templates \"frontend/src/templates/*.pug\" \"frontend/src/templates/**/*.pug\" --wt \"docs/\""
  }
```
