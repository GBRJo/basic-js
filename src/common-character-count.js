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
 const lettersS1 = s1.split('');
 let resultArray = [];
 let newS2 = s2;
 for (let i = 0; i < lettersS1.length; i++) {
  if (newS2.includes(lettersS1[i])) {
     resultArray.push(lettersS1[i]);
     const x = newS2.indexOf(lettersS1[i]);
     newS2 = newS2.slice(0, x) + newS2.slice(x + 1, newS2.length);
  }
}
  return resultArray.length
 

}

module.exports = {
  getCommonCharacterCount
};
