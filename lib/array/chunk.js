const { isArray, isNaN } = require('../../util/index');

const chunk = (ary, size = 1) => {
  if (!isArray(ary) || ary.length < 1) {
    return [];
  }

  // 长度化整处理
  let sizeInt = Number.parseInt(Number(size));
  if (isNaN(sizeInt) || sizeInt < 1) {
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

module.exports = {
  chunk
};

// let ary = [1, 2, '3x', { a: 12 }];

// console.log(chunk([]));
// console.log(chunk());
// console.log(chunk(null));
// console.log(chunk(ary));
// console.log(chunk(ary, 0));
// console.log(chunk(ary, 1));
// console.log(chunk(ary, -1));
// console.log(chunk(ary, 0.2));
// console.log(chunk(ary, 1.2));
// console.log(chunk(ary, 2));
// console.log(chunk(ary, 3));
// console.log(chunk(ary, 5));
// console.log(chunk(ary, '5'));
// console.log(chunk(ary, '5X'));
// console.log(chunk(ary, '0'));
