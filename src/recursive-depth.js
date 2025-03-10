const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {

  let depth = 1
  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          let depth2 = 1;
          depth2 += this.calculateDepth(arr[i]);
          if (depth2 > depth){
          depth = depth2
          } 
      }
  }
  return depth;
}
}

module.exports = {
  DepthCalculator
};
