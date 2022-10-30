const { isArray, isNaN } = require('../../util/index');
const chunk = (ary, size = 1) => {
  if (!isArray(ary) || ary.length < 1) {
    return [];
  }

  // 长度化整处理
  let sizeInt = Number.parseInt(Number(size));
  if (isNaN(sizeInt) && sizeInt < 1) {
    return [];
  }

  let newAry = [];
  let length = ary.length;
  let leng = 1;
  if (length >= 1 && length <= sizeInt) {
    newAry = [[...ary]];
    return newAry;
  } else {
    leng = Math.ceil(length / sizeInt);
    for (let i = 0; i < leng; i++) {
      newAry[i] = ary.slice(i * sizeInt, (i + 1) * sizeInt);
    }
  }
  return newAry;
};

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

console.log(chunk([]));
console.log(chunk([1]));
console.log(chunk([1, 2, 3]));
console.log(chunk([1, 2, 3], 2));
