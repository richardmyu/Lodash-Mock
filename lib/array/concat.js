const { isArray } = require('../../util/index.js');

// ES6 版本
const concat = (...param) => {
  let newAry = [];
  let arg = [...param];
  if (!arg.length) {
    return newAry;
  }
  arg.map(item => {
    if (isArray(item)) {
      newAry.push(...item);
    } else {
      newAry.push(item);
    }
  });
  return newAry;
};

// ES5 版本(主要是不使用扩展运算符)
function concatES5() {
  let newAry = [];
  let arg = [].slice.call(arguments);

  if (!arg.length) {
    return newAry;
  }
  for (let i = 0; i < arg.length; i++) {
    if (isArray(arg[i])) {
      arg[i].map(subItem => newAry.push(subItem));
    } else {
      newAry.push(arg[i]);
    }
  }
  return newAry;
}



module.exports = {
  concat,
  concatES5
};
