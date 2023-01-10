const emailRegExp = require('./emailRegExp');
const lettersAndDigitsRegExp = require('./lettersAndDigitsRegExp');
const nameRegExp = require('./nameRegExp');
const stringRegExp = require('./stringRegExp');
const passwordRegExp = require('./passwordRegExp');
const priceRegExp = require('./priceRegExp');

const regExp = {
  emailRegExp,
  lettersAndDigitsRegExp,
  nameRegExp,
  stringRegExp,
  passwordRegExp,
  priceRegExp,
};

module.exports = regExp;
