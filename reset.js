//==========================================
// Imports
//==========================================
const path = require("path"),
  fs = require("fs");

//==========================================
// Variables
//==========================================
//Initial Js File Text
let jsFileText = `//==========================================
// Imports
//==========================================
import axios from "./lib/axios.min.js";
window.axios = axios;

//==========================================
// Variables
//==========================================

//==========================================
// Code
//==========================================

//==========================================
// Exports
//==========================================`;

// Initial Html File Text
const htmlFileText = `<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="img/favicon.png" type="image/png" />
    <link rel="stylesheet" href="scss/style.scss" />
    <title>Projects with Parcel</title>
  </head>
  <body>
    <!-- Starter HTML File  -->
    <script type="text/javascript" src="js/main.js"></script>
  </body>
</html>`;

//==========================================
// Code
//==========================================
function resetStarter() {
  //deleting git directory
  function deleteFolderRecursive(path) {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach(function (file, index) {
        let curPath = path + "/" + file;
        if (fs.lstatSync(curPath).isDirectory()) {
          // recurse
          deleteFolderRecursive(curPath);
        } else {
          // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
  }
  deleteFolderRecursive("./.git");
  deleteFolderRecursive("./.idea");
  deleteFolderRecursive("./src/js/components");

  // file cleanup
  fs.writeFile("./src/index.html", htmlFileText, function (err) {
    if (!err) console.log("index.html Cleaned Succesfully!");
    console.log(err);
  });
  fs.writeFile("./src/js/main.js", jsFileText, function (err) {
    if (!err) console.log("main.js Cleaned Succesfully!");
    console.log(err);
  });
  if (fs.existsSync("./LICENSE")) {
    fs.unlink("./LICENSE", function (err) {
      if (err) throw err;
      console.log("LICENSE File deleted!");
    });
  }
  if (!fs.existsSync("./src/js/components/")) {
    fs.mkdirSync("./src/js/components/");
  }
  fs.writeFile("./src/js/components/variables.js", jsFileText, function (err) {
    if (!err) console.log("variables.js Cleaned Succesfully!");
    console.log(err);
  });
  fs.writeFile("./src/scss/pages/_home.scss", "", function (err) {
    if (!err) console.log("_home.scss Cleaned Succesfully!");
    console.log(err);
  });
  fs.writeFile("./src/scss/layout/_navigation.scss", "", function (err) {
    if (!err) console.log("_navigation.scss Cleaned Succesfully!");
    console.log(err);
  });
  fs.writeFile("./src/scss/layout/_footer.scss", "", function (err) {
    if (!err) console.log("_footer.scss Cleaned Succesfully!");
    console.log(err);
  });
} /*//=============/resetStarter end/=============//*/

//==========================================
// Exports
//==========================================
resetStarter();
