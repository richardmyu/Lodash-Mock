const { isArray } = require('../util/index')

/*
	_.difference(array, [values])
	  - 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。

	注意: 不像 _.pullAll，这个方法会返回一个新数组。

	参数
	  - array (Array): 要检查的数组。
	  - [values] (...Array): 排除的值。

	返回值
	  - (Array): 返回一个过滤值后的新数组。

	例子
		_.difference([3, 2, 1], [4, 2]);
		// => [3, 1]
*/

// 方法一：循环对比添加
const _difference = (ary, value) => {
	let result = []
	if (!ary || !isArray(ary)) {
		return result
	}

	result = [...ary]
	if (!value || !isArray(value)) {
		return result
	}

	const aryLeng = ary.length
	const valLeng = value.length
	for (let i = 0; i < aryLeng; i++) {
		for (let j = 0; j < valLeng; j++) {
			if (ary[i] === value[j]) {
				result.splice(i, 1)
			}
		}
	}
	return result
}

// 方法二-1：直接构造交集和差集
const _differenceSect = (ary, value) => {
	if (!ary || !isArray(ary)) {
		return []
	}
	if (!value || !isArray(value)) {
		return ary
	}

	// ary & value 的交集（intersect）
	let intersect = ary.filter(item => value.includes(item))

	if (intersect.length) {
		// 若存在交集，再计算 ary & intersect 的差集（diffsect）
		let diffsect = ary.filter(item => !intersect.includes(item))
		return diffsect
	} else {
		// 不存在交集，直接返回 ary
		return ary
	}
}

// 方法二-2：使用 Set 构造交集和差集
const _differenceSet = (ary, value) => {
	if (!ary || !isArray(ary)) {
		return []
	}
	if (!value || !isArray(value)) {
		return ary
	}

	// 将 value 组装成 Set（其实也没必要，可以使用 includes）
	// let newValue = new Set(value)

	// ary & value 的交集（intersect）
	// let intersect = new Set([...ary].filter(item => newValue.has(item)))
	let intersect = new Set([...ary].filter(item => value.includes(item)))

	// 使用了 Set，注意判断条件
	if (intersect.size) {
		// 若存在交集，再计算 ary & intersect 的差集（diffsect）
		let diffsect = new Set([...ary].filter(item => !intersect.has(item)))

		// 注意 diffsect 是 Set，要转换成数组返回
		return [...diffsect]
	} else {
		// 不存在交集，直接返回 ary
		return ary
	}
}


module.exports = {
	_difference,
	_differenceSect,
	_differenceSet
}
