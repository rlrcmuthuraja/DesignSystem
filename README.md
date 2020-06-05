# Muthuraja Design System

Welcome to Muthuraja Design System, a front-end component library and styleguide
made with [fractal](http://fractal.build/). Fractal is a tool to help you build
and document web component libraries and then integrate them into your projects.

The purpose for this project is to make a POC for Muthuraja Design System.

## Getting started
First, make sure you have [Node.js](https://nodejs.org/en/) installed, and
that node is available via terminal/ cmd (command prompt).

1. Clone or download this repository to your machine.
2. Open a terminal/ cmd, and navigate to *root* of this project.
3. Run `npm install`. NPM will then download and install all dependencies
into `node_modules`. This might take a while, so grab a coffee :-)
4. After install, type `gulp dev` to start the dev-server and open
[http://localhost:3000](http://localhost:3000) in your browser.
5. if you want to remove the node_modules run " rm -rf node_modules && npm cache clean --force"

## Task overview
The most important task are:

**`gulp compile`** compiles source-files.

**`gulp start`** compiles source-files and starts the local server on port 3000.

**`gulp build`** compiles source-files and builds a static version of the app
 to the folder `/www`.

**`gulp dev`** compiles source-files, starts the local server on port 3000
and watches for changes in the sourcecode. Changes are live reloaded in the
browser.



For other tasks available, please have a look at the `gulpfile.js`.

