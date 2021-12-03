---
slug: integrating-webpack-and-babel-in-a-legacy-project
title: Integrating Webpack and Babel in a legacy project
tags: [webpack, babel, legacy, php]
---
Let's say you have an old legacy application written in PHP or Perl that is used a lot over time. And while developing you come across a new fancy javscript library with instructions like `npm i super-dope-library` and a code example like `import {coolStuff} from 'super-dope-library'`. How is that going to work?


## What do you need
* **Package manager** - Yarn or NPM. This let's you install and manage third party packages.
* **Module bundler** - For example webpack or esbuild. Combines all the javascript from your project and the third party packages in optimized files.
* **Transpiler** - For example Babel. Compiles new JavaScript code to old JavaScript code so older browsers understand it.

*The examples in this post use NPM, webpack and Babel. The alternatives are all sharing the same concepts*

## Setup NPM, webpack and Babel
Node and NPM need to be installed and accessible from the commandline. Then run `npm init` at your project root. This will create a `package.json` file.

After that install the webpack and Babel dependencies:
```bash
npm install -D babel-loader @babel/core @babel/preset-env webpack webpack-cli
```
This will add dependencies to the `package.json` file. Now add a `webpack.config.js` file to the root of the project:
```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
};
```
The entry file `./src/index.js` will be the starting point of the Javascript and can be changed to a location that fits the current project.

The bundled and transpiled output file will be stored in `<project-root>/dist/bundle.js`. This can also be a location that fits the current project.

## Writing code that uses a NPM package
The [pluralize](https://www.npmjs.com/package/pluralize) NPM package can be used to pluralize words. Let's create a high-end application where a user can enter a random english word and see the pluralized version:

Install the library:
```bash
npm install pluralize
```

Add the following code to `./src/index.js`:
```JavaScript
import pluralize from 'pluralize'

const word = prompt("Enter an English word to pluralize", "cow");

const pluralized = pluralize(word);

alert(pluralized);
```

Create the `/dist/bundle.js` file:
```bash
./node_modules/.bin/webpack
```

## Integrate it in a legacy project
After the `bundle.js` file is created it is fairly simple to integrate it. Just add the following script tag somewhere in the HTML and make sure the file is served by the webserver.

```html
<script src="/dist/bundle.js" />
```

## Github Example
The steps above are implemented in an example PHP project: https://github.com/jurruh/legacy-php-webpack-babel-example

## Notes
* It is not necessary to ship the node_modules folder and the untranspiled Javascript code to production. These can be removed in the build process to gain smaller packages.
* Add the dist folder to .gitignore. The code can be generated and therefor it should not be in version control.
* You should explore the webpack CLI to see what is capable of: https://www.npmjs.com/package/webpack-cli
