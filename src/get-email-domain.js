const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domain = '';
  const dogIndex = email.lastIndexOf('@');
  if (dogIndex >= 0) {
    domain = email.slice((dogIndex + 1));
  }
  return domain;
}

module.exports = {
  getEmailDomain
};
