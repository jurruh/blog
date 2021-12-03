(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(96)),i={slug:"integrating-webpack-and-babel-in-a-legacy-project",title:"Integrating Webpack and Babel in a legacy project",tags:["webpack","babel","legacy","php"]},o={permalink:"/integrating-webpack-and-babel-in-a-legacy-project",source:"@site/blog/2021-12-02-integrating-webpack-and-babel-in-a-legacy-project.md",description:"What do you need",date:"2021-12-02T00:00:00.000Z",tags:[{label:"webpack",permalink:"/tags/webpack"},{label:"babel",permalink:"/tags/babel"},{label:"legacy",permalink:"/tags/legacy"},{label:"php",permalink:"/tags/php"}],title:"Integrating Webpack and Babel in a legacy project",readingTime:2.475,truncated:!1,nextItem:{title:"Ansible boilerplate for webapps with Docker, Traefik and Let's Encrypt",permalink:"/ansible-boilerplate-for-webapps"}},p=[{value:"What do you need",id:"what-do-you-need",children:[]},{value:"Setup NPM, webpack and Babel",id:"setup-npm-webpack-and-babel",children:[]},{value:"Writing code that uses a NPM package",id:"writing-code-that-uses-a-npm-package",children:[]},{value:"Integrate it in a legacy project",id:"integrate-it-in-a-legacy-project",children:[]},{value:"Github Example",id:"github-example",children:[]},{value:"Notes",id:"notes",children:[]}],c={toc:p};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Let's say you have an old legacy application written in PHP or Perl that is used a lot over time. And while developing you come across a new fancy javscript library with instructions like ",Object(l.b)("inlineCode",{parentName:"p"},"npm i super-dope-library")," and a code example like ",Object(l.b)("inlineCode",{parentName:"p"},"import {coolStuff} from 'super-dope-library'"),". How is that going to work?"),Object(l.b)("h2",{id:"what-do-you-need"},"What do you need"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Package manager")," - Yarn or NPM. This let's you install and manage third party packages."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Module bundler")," - For example webpack or esbuild. Combines all the javascript from your project and the third party packages in optimized files."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Transpiler")," - For example Babel. Compiles new JavaScript code to old JavaScript code so older browsers understand it.")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"The examples in this post use NPM, webpack and Babel. The alternatives are all sharing the same concepts")),Object(l.b)("h2",{id:"setup-npm-webpack-and-babel"},"Setup NPM, webpack and Babel"),Object(l.b)("p",null,"Node and NPM need to be installed and accessible from the commandline. Then run ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," at your project root. This will create a ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file."),Object(l.b)("p",null,"After that install the webpack and Babel dependencies:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm install -D babel-loader @babel/core @babel/preset-env webpack webpack-cli\n")),Object(l.b)("p",null,"This will add dependencies to the ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file. Now add a ",Object(l.b)("inlineCode",{parentName:"p"},"webpack.config.js")," file to the root of the project:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: 'bundle.js',\n  },\n  module: {\n  rules: [\n    {\n      test: /\\.m?js$/,\n      exclude: /(node_modules|bower_components)/,\n      use: {\n        loader: 'babel-loader',\n        options: {\n          presets: ['@babel/preset-env']\n        }\n      }\n    }\n  ]\n}\n};\n")),Object(l.b)("p",null,"The entry file ",Object(l.b)("inlineCode",{parentName:"p"},"./src/index.js")," will be the starting point of the Javascript and can be changed to a location that fits the current project."),Object(l.b)("p",null,"The bundled and transpiled output file will be stored in ",Object(l.b)("inlineCode",{parentName:"p"},"<project-root>/dist/bundle.js"),". This can also be a location that fits the current project."),Object(l.b)("h2",{id:"writing-code-that-uses-a-npm-package"},"Writing code that uses a NPM package"),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/pluralize"},"pluralize")," NPM package can be used to pluralize words. Let's create a high-end application where a user can enter a random english word and see the pluralized version:"),Object(l.b)("p",null,"Install the library:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm install pluralize\n")),Object(l.b)("p",null,"Add the following code to ",Object(l.b)("inlineCode",{parentName:"p"},"./src/index.js"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-JavaScript"},'import pluralize from \'pluralize\'\n\nconst word = prompt("Enter an English word to pluralize", "cow");\n\nconst pluralized = pluralize(word);\n\nalert(pluralized);\n')),Object(l.b)("p",null,"Create the ",Object(l.b)("inlineCode",{parentName:"p"},"/dist/bundle.js")," file:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"./node_modules/.bin/webpack\n")),Object(l.b)("h2",{id:"integrate-it-in-a-legacy-project"},"Integrate it in a legacy project"),Object(l.b)("p",null,"After the ",Object(l.b)("inlineCode",{parentName:"p"},"bundle.js")," file is created it is fairly simple to integrate it. Just add the following script tag somewhere in the HTML and make sure the file is served by the webserver."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<script src="/dist/bundle.js" />\n')),Object(l.b)("h2",{id:"github-example"},"Github Example"),Object(l.b)("p",null,"The steps above are implemented in an example PHP project: ",Object(l.b)("a",{parentName:"p",href:"https://github.com/jurruh/legacy-php-webpack-babel-example"},"https://github.com/jurruh/legacy-php-webpack-babel-example")),Object(l.b)("h2",{id:"notes"},"Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"It is not necessary to ship the node_modules folder and the untranspiled Javascript code to production. These can be removed in the build process to gain smaller packages."),Object(l.b)("li",{parentName:"ul"},"Add the dist folder to .gitignore. The code can be generated and therefor it should not be in version control."),Object(l.b)("li",{parentName:"ul"},"You should explore the webpack CLI to see what is capable of: ",Object(l.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/webpack-cli"},"https://www.npmjs.com/package/webpack-cli"))))}b.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(a),u=n,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||l;return a?r.a.createElement(m,o(o({ref:t},c),{},{components:a})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);