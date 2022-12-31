const { isArray, isNaN } = require('../../util/index');

/**
 * @desc 将数组（array）拆分成多个 size 长度的区块，
 *       并将这些区块组成一个新数组。
 *       如果 array 无法被分割成全部等长的区块，
 *       那么最后剩余的元素将组成一个区块。
 * @param {array} ary 需要处理的数组
 * @param {number} size 每个数组区块的长度
 * @returns {array} 包含拆分区块的新数组（二维数组）
 */
const chunk = (ary, size = 1) => {
  if (!isArray(ary) || ary.length < 1) {
    return [];
  }

  // 长度化整处理
  let sizeInt = Number.parseInt(Number(size));

  if (isNaN(sizeInt) || sizeInt < 1) {
    return [];
  }

  let result = [];
  let length = ary.length;
  let leng = 1;

  if (length >= 1 && length <= sizeInt) {
    result = [[...ary]];
    return result;
  } else {
    leng = Math.ceil(length / sizeInt);
    for (let i = 0; i < leng; i++) {
      result[i] = ary.slice(i * sizeInt, (i + 1) * sizeInt);
    }
  }

  return result;
};

module.exports = {
  chunk
};
