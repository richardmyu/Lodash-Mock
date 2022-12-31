const { isArray, isFunction } = require('../../util/index');
// const { difference } = require('./difference');
const { identify } = require('lodash');

/**
 *
 * @param {array} array 要检查的数组
 * @param {array} [value] 排除的值
 * @param {array|function|object|string} [fn] iteratee 调用每个元素
 * @returns
 */
function differenceBy(ary, ...value) {
  let result = [];

  // 没有第一个参数或者第一个参数不是 array
  if (!ary && !isArray(ary)) {
    return result;
  }

  // 没有排除值
  if (!value) {
    result = [...ary];
    return result;
  }

  let checkAry = [];

  // 集合排除值中的数组元素
  value.forEach(item => {
    if (isArray(item)) {
      checkAry.push(...item)
    }
  });

  // 排除值中无数组元素
  if (checkAry.length === 0) {
    result = [...ary];
    return result;
  }

  // iteratee
  let iteratee = checkAry[checkAry.length - 1];

  // 差集
  // ary.forEach(item => {
  //   if (!checkAry.includes(item)) {
  //     result.push(item)
  //   }
  // })
}

module.exports = {
  differenceBy
};
