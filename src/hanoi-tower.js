const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let result ={};
const turnsNumber = (2 ** disksNumber) - 1;
const gameTime = (turnsNumber / turnsSpeed) *3600;
result['turns'] = turnsNumber;
result['seconds'] = Math.floor(gameTime);
return result;
}

module.exports = {
  calculateHanoi
};
