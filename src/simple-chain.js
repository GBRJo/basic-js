const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(value);
    return this; 
  },
  removeLink(position) {
    if (position < 1 || position > this.result.length || !Number.isInteger(position)) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.result.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
const chain = this.result.map(link => '( ' + link + ' )').join('~~');
this.result = [];
return chain;
  }
};

module.exports = {
  chainMaker
};
