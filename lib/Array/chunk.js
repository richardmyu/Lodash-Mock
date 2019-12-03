const { isArray, isNaN } = require('../../util/index')

/*
  _.chunk(array, [size=1])
    - 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

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

const _chunk = (ary, size = 1) => {
  let sizeInt = Number.parseInt(Number(size))
  let newAry = []
  if (!isNaN(sizeInt) && sizeInt > 0) {
    let length = ary == null ? 0 : isArray(ary) ? ary.length : 0
    let leng = Math.ceil(length / sizeInt)
    for (let i = 0; i < leng; i++) {
      newAry[i] = ary.slice(i * sizeInt, (i + 1) * sizeInt)
    }
  }
  return newAry
}

module.exports = {
  _chunk
}
