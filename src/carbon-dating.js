const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let MODERN_ACTIVITY = 15;
  let HALF_LIFE_PERIOD = 5730;
  if (isNaN(parseFloat(sampleActivity)) || typeof sampleActivity !== 'string') {
return false;
  }
const activity = parseFloat(sampleActivity);

if (activity <= 0 || activity >= MODERN_ACTIVITY) {
  return false;
    }
 let k = Math.LN2 / HALF_LIFE_PERIOD;
 let result = Math.log (MODERN_ACTIVITY / activity) / k;
    
  return Math.ceil (result);
}

module.exports = {
  dateSample
};
