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
  const count = {};
  
  domains.forEach(domain => {
    let world = domain.split('.');
    let domainWorldArr = [];
    
    for (let i = world.length - 1; i >= 0; i--) {
      domainWorldArr.push(world[i]);
      const domainWorld = '.' + domainWorldArr.join('.');
      
      if (!count[domainWorld]) {
        count[domainWorld] = 1;
      } else {
        count[domainWorld] = count[domainWorld] + 1;
      }
    }
  });
  
  return count;
}

module.exports = {
  getDNSStats
};
