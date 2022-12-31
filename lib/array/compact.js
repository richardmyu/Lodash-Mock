const { isArray } = require('../../util/index');

/**
 * @desc 创建一个新数组，包含原数组中所有的非假值元素。
 * @param {array} ary 待处理的数组
 * @returns {array} 过滤掉假值的新数组
 */
const compact = ary => {
  let leng = ary == null ? 0 : isArray(ary) ? ary.length : 0;
  let newAry = [];

  for (let i = 0; i < leng; i++) {
    if (ary[i]) {
      newAry.push(ary[i]);
    }
  }

  return newAry;
};

module.exports = {
  compact
};
