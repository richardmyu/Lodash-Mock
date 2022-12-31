// 类型检测
const dataType = value => {
  let str = Object.prototype.toString.call(value);
  return str.slice(8, -1);
};

// 数值
const isNumber = value => dataType(value) === 'Number';

// 字符串
const isString = value => dataType(value) === 'String';

// 布尔
const isBoolean = value => dataType(value) === 'Boolean';

// 数组
const isArray = value => dataType(value) === 'Array';

// 对象
const isObject = value => dataType(value) === 'Object';

// 函数
const isFunction = value => dataType(value) === 'Function';

// 正则
const isRegExp = value => dataType(value) === 'RegExp';

// null
const isNull = value => dataType(value) === 'Null';

// NaN
const isNaN = value => typeof value === 'number' && value !== value;

module.exports = {
  dataType,
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  isFunction,
  isRegExp,
  isNull,
  isNaN
};
