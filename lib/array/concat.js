const { isArray } = require('../../util/index.js');

/**
 * @desc 创建一个新数组，将 array 与任何数组 或 值连接在一起。
 * @param  {array} ary 被连接的数组
 * @param  {*} value 连接的值
 * @returns {array} 连接后的新数组
 */
// ES6 版本
const concat = (ary, ...value) => {
  let newAry = [];

  // 第一个参数若是数组，遍历后加入新数组
  // 若不是数组，直接加入
  if (isArray(ary)) {
    ary.forEach(item => newAry.push(item));
  } else {
    newAry.push(ary);
  }

  value.forEach(item => {
    if (isArray(item)) {
      newAry.push(...item);
    } else {
      newAry.push(item);
    }
  });

  return newAry;
};

// ES5 版本(主要是不使用扩展运算符)
function concatES5() {
  let newAry = [];
  let list = [].slice.call(arguments);
  let leng = list.length;

  // 不必区分第一个参数是否为数组
  // 与后续参数处理逻辑一致
  for (let i = 0; i < leng; i++) {
    if (isArray(list[i])) {
      list[i].forEach(item => newAry.push(item));
    } else {
      newAry.push(list[i]);
    }
  }

  return newAry;
}

module.exports = {
  concat,
  concatES5
};
