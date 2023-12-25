const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!(date instanceof Date) || isNaN(date.getTime()) || date.toString() === 'Invalid Date') {
    throw new Error('Invalid date!');
}
  const mnth = date.getMonth();
  if (mnth >= 2 && mnth <= 4) {
    return 'spring';
  } else if (mnth >= 5 && mnth <= 7) {
    return 'summer';
  } else if (mnth >= 8 && mnth <= 10) {
    return 'autumn';
  } else {
    return 'winter';
  }
}
 

module.exports = {
  getSeason
};
