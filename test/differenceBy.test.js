// const asserrt = require('assert').strict
const _ = require('./node_modules/lodash')

console.log(_.differenceBy())//[]
console.log(_.differenceBy(null))//[]

console.log(_.differenceBy([]))//[]
console.log(_.differenceBy([1]))//[1]

console.log(_.differenceBy([1], []))//[1]

console.log(_.differenceBy([1, 2, 3], null))//[1,2,3]

console.log(_.differenceBy([1, 2, [3]], [3]))//[1,2,[3]]
console.log(_.differenceBy([1, 2, [3]], [[3]]))//[1,2,[3]]
console.log(_.differenceBy([1, 2, { 'a': 3 }], [{ 'a': 3 }]))//[1,2,{ 'a': 3 }]

console.log(_.differenceBy([1, 2, 3], [3], null))//[1,2]

console.log(_.differenceBy([1, 2, 3], [3], 3))//[]
console.log(_.differenceBy([1, 2, 3], [3], 2))//[]

console.log(_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor))//[3.1,1.3]

console.log(_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'))//[{x:2}]
