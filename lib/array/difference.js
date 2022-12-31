const { isArray } = require('../../util/index');
const { difference: _difference } = require('lodash');

/**
 * @desc 创建一个具有唯一 array 值的数组，
 *       每个值不包含在其他给定的数组中。
 * @param {array} ary 要检查的数组
 * @param {...array} value 排除的值
 * @returns {array} 过滤值后的新数组
 */
const difference = (ary, ...value) => {
  let result = [];

  if (!ary || !isArray(ary)) {
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

  // 差集
  ary.forEach(item => {
    if (!checkAry.includes(item)) {
      result.push(item)
    }
  });

  return result;
};


module.exports = {
  difference,
};
