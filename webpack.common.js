
const path = require("path");

module.exports = {
  entry: {
    app : "./src/js_files/index.js",
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};