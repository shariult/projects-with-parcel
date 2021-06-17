# Projects With Parcel

This Package is for Developing, Compiling & Building frontend technology such as Website templates,vanilla JavaScript Web Applications etc. It is easier to use and also have full production level code support. It can work with multiple projects in one place with minimum configuration.

## Features

1. SASS compilation, CSS compression and auto vendor prefixed.
2. JavaScript compression, babel processed JavaScript.
3. Image compression for production.
4. Better folder architecture for maintainable and scalable code.
5. EJS/Pug template compilation
6. Font-awesome, Bootstrap, Bulma, TailwindCSS, d3.JS, Axios is installed and ready to use when needed.

## Installation
**Node.JS** is required. Install it then run following code one by one in terminal from project directory,

```bash
npm i -D parcel-bundler parcel-plugin-custom-dist-structure parcel-plugin-nuke-dist sass@1.32.12 parcel-plugin-ejs-template pug typescript prettier
npm run reset
```
Or, In any bash terminal (Git bash too), run following to install all in one go,

```bash
npm i -D parcel-bundler parcel-plugin-custom-dist-structure parcel-plugin-nuke-dist sass@1.32.12 parcel-plugin-ejs-template pug typescript prettier @fortawesome/fontawesome-free && npm i -S bootstrap jquery @popperjs/core bulma tailwindcss d3 axios && npm run reset
```

Image compression package is not installed due to some bugs in the package which disables image import via JavaScript. To enable image import install following,

```bash
npm i -D parcel-plugin-imagemin
```



## Launch

Run development mode,

```bash
npm start
```
Build for production,
```bash
npm run build
```

## Usage

1. **Stylesheets:** Stylesheets SCSS or CSS can be linked in HTML/EJS pages using the \<link\> tag. **Don't import stylesheets using JavaScript**.

2. **Assets:** Parcel exports all file in "dist" directory by default. To export file in different folders npm package "parcel-plugin-custom-dist-structure" is used. It exports file to directory based on the file extension. Preconfigured destinations can be seen in the "package.json" file. For further information, please visit [parcel-plugin-custom-dist-structure](https://npmjs.com/package/parcel-plugin-custom-dist-structure) for more information.

3. **JavaScript:** JavaScript can be included by ES6 "import" or the Common.JS way. It can also be included by using \<script\> tag within the HTML file. JavaScript file that exports such as axios.min.js should be imported following way,

```javascript
import axios from "./lib/axios.min";
// Alternatively (If above doesn't work as intended)
import * as d3 from "./lib/d3.min";
window.axios = axios;
window.d3 = d3;
```
For JavaScript files that do not export (or is not needed as a variable) such as bootstrap.min.js, should be imported following way,

```javascript
import "./lib/bootstrap.min";
```

   

### Multiple Projects Configuration

By default project directory is set to "./src". To change the project/working directory, modify "script" in "package.json" file. As an example, "example-project" is the project directory then modify "script" field in "package.json" following way,

```json
"scripts": {
    "reset": "node reset.js",
    "start": "parcel ./example-project/index.html",
    "build": "parcel build ./example-project/index.html --out-dir ./dist --public-url ./"
  }
```

### Common Libraries Installation

**Installation:**

```bash
npm i bootstrap jquery @popperjs/core
npm i -D @fortawesome/fontawesome-free
```

**Usage:**

```javascript
// main.js
import 'bootstrap'; // Import bootstrap.js
```

CSS and SCSS files should be imported in "\_vendor.scss" following way,

```scss
// _vendor.scss
$fa-font-path: "../../node_modules/@fortawesome/fontawesome-free/webfonts"; // set $fa-font-path value
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid";
@import "~@fortawesome/fontawesome-free/scss/regular";
@import "~@fortawesome/fontawesome-free/scss/brands";
@import "~bootstrap/scss/bootstrap";
```

### SCSS 7-1 Folder Architecture

**themes** - Predefined themes or for theming CSS library.
**vendor** - Importing icons/fonts, CSS libraries and other predefined CSS.
**abstracts** - Codes that does not output css (variables, mixins, functions)
**base** - Basic project definitions (base (css Reset), animation, typography, utilities)
**layout** - Elements that should work everywhere and on all pages. (global grid, navigation, header, footer, sidebar)
**pages** - Very specific styles for a specific page like for example, a homepage. Basically, styles for the sections of a page is written here.
**components** - One file for each component. Components are reusable building blocks and independent of each other. Components are held together by the layout of the page. Example: buttons, card etc.



## FAQ

No Frequently asked questions.