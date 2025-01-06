const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsCounts = {};
  for (let domain of domains) {
    const names = domain.split('.');
    let dns = '';
    while (names.length) {
      dns += '.' + names.pop();
      if (dns in dnsCounts) {
        dnsCounts[dns]++;
      } else {
        dnsCounts[dns] = 1;
      }
    }
  }
  return dnsCounts;
}

module.exports = {
  getDNSStats
};
