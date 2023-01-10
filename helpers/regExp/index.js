const emailRegExp = require('./emailRegExp');
const lettersAndDigitsRegExp = require('./lettersAndDigitsRegExp');
const nameRegExp = require('./nameRegExp');
const stringRegExp = require('./stringRegExp');
const passwordRegExp = require('./passwordRegExp');

const regExp = {
  emailRegExp,
  lettersAndDigitsRegExp,
  nameRegExp,
  stringRegExp,
  passwordRegExp,
};

module.exports = regExp;
