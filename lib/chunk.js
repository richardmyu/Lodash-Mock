const { isArray, isNaN } = require('../util/index');

/*
  _.chunk(array, [size=1])
    - 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。如果 array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

  参数
    - array (Array): 需要处理的数组
    - [size=1] (number): 每个数组区块的长度

  返回
    - (Array): 返回一个包含拆分区块的新数组（相当于一个二维数组）。

  例子
    _.chunk(['a', 'b', 'c', 'd'], 2);
    // => [['a', 'b'], ['c', 'd']]

    _.chunk(['a', 'b', 'c', 'd'], 3);
    // => [['a', 'b', 'c'], ['d']]
*/

// 方法一：数组重组
const chunk = (ary, size = 1) => {
  if (!isArray(ary)) {
    return [];
  }

  // 步长处理
  let sizeInt = Number.parseInt(Number(size));
  let newAry = [];

  if (!isNaN(sizeInt) && sizeInt > 0) {
    let length = ary.length;
    let leng = Math.ceil(length / sizeInt);
    for (let i = 0; i < leng; i++) {
      newAry[i] = ary.slice(i * sizeInt, (i + 1) * sizeInt);
    }
  } else {
    return [];
  }

  return newAry;
};

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */


/*

import slice from './slice.js'
import toInteger from './toInteger.js'

function chunk(array, size = 1) {
  size = Math.max(toInteger(size), 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

*/


module.exports = {
  chunk
};
