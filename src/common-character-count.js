const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1map = new Map();
  for (let char of s1) {
    if (s1map.has(char)) {
      s1map.set(char, s1map.get(char) + 1);
    } else {
      s1map.set(char, 1);
    }
  }

  let result = 0;
  for (let char of s2) {
    if (s1map.get(char) > 0) {
      result++;
      s1map.set(char, s1map.get(char) - 1);
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
