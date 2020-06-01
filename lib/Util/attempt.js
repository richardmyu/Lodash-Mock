const { isFunction } = require('../../util/index')
/*
_.attempt(func, [args])
尝试调用func，返回结果 或者 捕捉错误对象。任何附加的参数都会在调用时传给func。

添加版本
  3.0.0

参数
  func(Function): 要尝试调用的函数。
  [args](...*): 调用func时，传递的参数。
返回
	(*): 返回func结果或者错误对象。

例子
// Avoid throwing errors for invalid selectors.
var elements = _.attempt(function (selector) {
	return document.querySelectorAll(selector);
}, '>_>');

if (_.isError(elements)) {
	elements = [];
}
*/

const _attempt = (fn, args) => {
	if (!fn || !isFunction(fn)) {
		// throw new TypeError('Cannot read property \'call\' of null')
		return
	}
	if (args) {
		return fn(args)
	} else {
		return fn()
	}
}

module.exports = {
	_attempt
}
