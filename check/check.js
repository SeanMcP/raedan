const words = require("just-the-words");

function check(string) {
  return words(string);
}

module.exports = check;
