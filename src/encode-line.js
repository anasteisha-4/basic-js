const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let currentCnt = 1;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i + 1] === str[i]) {
      currentCnt++;
    } else {
      result += (currentCnt > 1 ? currentCnt : '') + str[i];
      currentCnt = 1;
    }
  }
  if (str.length) {
    result += (currentCnt > 1 ? currentCnt : '') + str.at(-1);
  }
  return result;
}

module.exports = {
  encodeLine
};
