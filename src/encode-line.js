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
  const letters = str.split('');
  let count = 1;
  let result = ''
 
  for (let i = 0; i < letters.length; i++) {
   if (letters[i] === letters[i + 1]) { 
       count = count + 1; 
      
   }
   else {
       result += count > 1? count + letters[i]: letters[i];
       count = 1;
   }
  
  }

  return result;
 }

module.exports = {
  encodeLine
};
