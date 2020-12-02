const assert = require('assert').strict
const _ = require('lodash')
const { isArray } = require('../../util/index.js')

/*
	_.dropRight(array, [n=1])
	  - 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）

	参数
	  - array (Array): 要查询的数组。
	  - [n=1] (number): 要去除的元素个数。

	返回值
	  - (Array): 返回array剩余切片。

	例子
		_.dropRight([1, 2, 3]);
		// => [1, 2]

		_.dropRight([1, 2, 3], 2);
		// => [1]

		_.dropRight([1, 2, 3], 5);
		// => []

		_.dropRight([1, 2, 3], 0);
		// => [1, 2, 3]
*/
function _dropRight(array, n = 1) {
	if (!array && !isArray(array)) {
		return []
	}
	let length = array.length
	return array.filter((item, index) => index + 1 <= (length - n))
}

console.log(_.dropRight())
console.log(_dropRight())

console.log(_.dropRight([]))
console.log(_dropRight([]))

console.log(_.dropRight([1, 2, 3]))
console.log(_dropRight([1, 2, 3]))

console.log(_.dropRight([1, 2, 3], 2))
console.log(_dropRight([1, 2, 3], 2))

console.log(_.dropRight([1, 2, 3], 5))
console.log(_dropRight([1, 2, 3], 5))

console.log(_.dropRight([1, 2, 3], -1))
console.log(_dropRight([1, 2, 3], -1))
