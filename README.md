# Commander Gulp Watch Dynamic

<p>Watch dinámicamente</p>
 
![commander: version (tag)](https://img.shields.io/badge/commander-v3.0.2-blue?style=for-the-badge)
![gulp: version (tag)](https://img.shields.io/badge/gulp-v4.0.2-orange?style=for-the-badge)
![MIT License](https://img.shields.io/badge/lincense-MIT-yellow?style=for-the-badge) 
![npm: version (tag)](https://img.shields.io/badge/npm-v7.0.15-red?style=for-the-badge)
![node: version (tag](https://img.shields.io/badge/node-v15.4.0-green?style=for-the-badge)


### Instalación

```bash
$ npm install commander-gulp-watch
```


### Comando a ejecutar

```bash
$ commander-gulp-watch w-templates 'entry' --wt 'ouput'
$ commander-gulp-watch w-scss 'entry' --wscss 'ouput'
$ commander-gulp-watch w-stylus 'entry' --wstyl 'ouput'
```


### Configuración por el package.json

```bash
"scripts": {
  "watch": "npm run watch-templates watch-sass watch-templates watch-mailing",
  "watch-sass": "commander-gulp-watch w-scss \"frontend/src/static/styles/*.scss\" \"frontend/src/static/styles/**/*.scss\" --wscss  \"docs/styles/\"",
  "watch-stylus": "commander-gulp-watch w-stylus \"frontend/src/static/styles/*.styl\" \"frontend/src/static/styles/**/*.styl\" --wstyl  \"docs/styles/\"",
  "watch-templates": "commander-gulp-watch w-templates \"frontend/src/templates/*.pug\" \"frontend/src/templates/**/*.pug\" --wt  \"docs/\"",
  "watch-mailing": "commander-gulp-watch w-templates \"frontend/src/mail/*.pug\" \"frontend/src/mail/**/*.pug\" --wt  \"docs/\""
  }
```
### Link
https://jugaz.github.io/commander-gulp-watch/
