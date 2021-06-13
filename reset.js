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
// Reset Funcitons
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
  try {
    deleteFolderRecursive("./.git");
    deleteFolderRecursive("./.idea");
    deleteFolderRecursive("./src/js/components");
    // file cleanup
    fs.writeFileSync("./src/index.html", htmlFileText);
    fs.writeFileSync("./src/js/main.js", jsFileText);
    if (fs.existsSync("./LICENSE")) {
      fs.unlinkSync("./LICENSE");
    }
    if (!fs.existsSync("./src/js/components/")) {
      fs.mkdirSync("./src/js/components/");
    }
    fs.writeFileSync("./src/js/components/variables.js", jsFileText);
    fs.writeFileSync("./src/scss/pages/_home.scss", "");
    fs.writeFileSync("./src/scss/layout/_navigation.scss", "");
    fs.writeFileSync("./src/scss/layout/_footer.scss", "");
  } catch (err) {
    console.log(err);
  }
}

//==========================================
// Exports
//==========================================
resetStarter();
