const { isArray, isFunction } = require('../../util/index');
// const { difference } = require('./difference');
const { identify } = require('lodash');

function differenceBy(array, value, fn = identify) {
  let result = [];
  // 没有第一个参数或者第一个参数不是 array
  if (!array && !isArray(array)) {
    return result;
  }

  // 不存在第二个参数或者第二个参数不是 array，返回第一个参数
  if (!value || value && !isArray(value)) {
    result = [...result];
    return result;
  }

  // 如果存在第三个参数（即指定 iteratee）
  if (fn) {
    if (isFunction(fn)) {
      // 指定参数是一个函数

    } else {
      // 指定参数不是函数
    }
  } else {
    // 默认参数
  }
}

module.exports = {
  differenceBy
};
