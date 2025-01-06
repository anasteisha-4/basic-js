const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  for (
    let i = 0;
    i < (options.repeatTimes !== undefined ? options.repeatTimes : 1);
    i++
  ) {
    const addition = '' + options.addition;
    let current = '' + str;
    if (options.addition !== undefined) {
      for (
        let j = 0;
        j <
        (options.additionRepeatTimes != undefined
          ? options.additionRepeatTimes
          : 1);
        j++
      ) {
        current += addition;
        if (j < options.additionRepeatTimes - 1) {
          current +=
            options.additionSeparator != undefined
              ? options.additionSeparator
              : '|';
        }
      }
    }
    if (i < options.repeatTimes - 1) {
      current += options.separator != undefined ? options.separator : '+';
    }
    result += '' + current;
  }
  return result;
}

module.exports = {
  repeater
};
