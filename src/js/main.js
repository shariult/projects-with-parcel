//==========================================
// Imports
//==========================================
import axios from "./lib/axios.min.js";
window.axios = axios;

import variables from "./components/variables";
import embedQuote from "./components/embed-quote";
import setColors from "./components/set-colors";

//==========================================
// Variables
//==========================================

//==========================================
// Code
//==========================================
const { btn } = variables;
btn.addEventListener("click", () => {
  embedQuote();
  setColors();
});

//==========================================
// Exports
//==========================================
