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
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';
  const additionRepeatTimes = options.additionRepeatTimes !== undefined ? Number(options.additionRepeatTimes) : 1;
  const repeatTimes = options.repeatTimes !== undefined ? Number(options.repeatTimes) : 1;
  const separator = options.separator !== undefined ?  String(options.separator) : '+';

  let additionStr = (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
  let result = (str + additionStr + separator).repeat(repeatTimes).slice(0, -separator.length);
  
  return result;
}

module.exports = {
  repeater
};
