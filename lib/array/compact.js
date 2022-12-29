const { isArray } = require('../../util/index');

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

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */

/*

function compact(array) {
  let resIndex = 0
  const result = []

  if (array == null) {
    return result
  }

  for (const value of array) {
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}

*/


module.exports = {
  compact
};
