const { isArray } = require('../../util/index');

// 方法一：循环对比添加
const difference = (ary, value) => {
  let result = [];
  if (!ary || !isArray(ary)) {
    return result;
  }

  result = [...ary];
  if (!value || !isArray(value)) {
    return result;
  }

  const aryLeng = ary.length;
  const valLeng = value.length;
  for (let i = 0; i < aryLeng; i++) {
    for (let j = 0; j < valLeng; j++) {
      if (ary[i] === value[j]) {
        result.splice(i, 1);
      }
    }
  }
  return result;
};

// 方法二-1：直接构造交集和差集
const differenceSect = (ary, value) => {
  if (!ary || !isArray(ary)) {
    return [];
  }
  if (!value || !isArray(value)) {
    return ary;
  }

  // ary & value 的交集（intersect）
  let intersect = ary.filter(item => value.includes(item));

  if (intersect.length) {
    // 若存在交集，再计算 ary & intersect 的差集（diffsect）
    let diffsect = ary.filter(item => !intersect.includes(item));
    return diffsect;
  } else {
    // 不存在交集，直接返回 ary
    return ary;
  }
};

// 方法二-2：使用 Set 构造交集和差集
const differenceSet = (ary, value) => {
  if (!ary || !isArray(ary)) {
    return [];
  }
  if (!value || !isArray(value)) {
    return ary;
  }

  // 将 value 组装成 Set（其实也没必要，可以使用 includes）
  // let newValue = new Set(value)

  // ary & value 的交集（intersect）
  let intersect = new Set([...ary].filter(item => value.includes(item)));

  // 使用了 Set，注意判断条件
  if (intersect.size) {
    // 若存在交集，再计算 ary & intersect 的差集（diffsect）
    let diffsect = new Set([...ary].filter(item => !intersect.has(item)));

    // 注意 diffsect 是 Set，要转换成数组返回
    return [...diffsect];
  } else {
    // 不存在交集，直接返回 ary
    return ary;
  }
};


module.exports = {
  difference,
  differenceSect,
  differenceSet
};
