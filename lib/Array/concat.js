const { isArray } = require('../../util/index.js')

/*
	_.concat(array, [values])
	  - 创建一个新数组，将array与任何数组 或 值连接在一起。

	参数
	  - array (Array): 被连接的数组。
	  - [values] (...*): 连接的值。

	返回值
	  - (Array): 返回连接后的新数组。

	例子
		var array = [1];
		var other = _.concat(array, 2, [3], [[4]]);

		console.log(other);
		// => [1, 2, 3, [4]]

		console.log(array);
		// => [1]
*/

// ES6版本
const _concat = (...param) => {
	let newAry = []
	let arg = [...param]
	if (!arg.length) {
		return newAry
	}
	arg.map(item => {
		if (isArray(item)) {
			newAry.push(...item)
		} else {
			newAry.push(item)
		}
	})
	return newAry
}

// ES5 版本(主要是不使用扩展运算符)
function _concatEs5() {
	let newAry = []
	let arg = [].slice.call(arguments)

	if (!arg.length) {
		return newAry
	}
	for (let i = 0; i < arg.length; i++) {
		if (isArray(arg[i])) {
			arg[i].map(subItem => newAry.push(subItem))
		} else {
			newAry.push(arg[i])
		}
	}
	return newAry
}



module.exports = {
	_concat,
	_concatEs5
}
