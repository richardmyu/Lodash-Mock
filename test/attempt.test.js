const asserrt = require('assert').strict
const _ = require('lodash')
const { _attempt } = require('../../lib/Util/attempt')

// try {
// 	console.log(_.attempt())
// } catch (err) {
// 	console.log('=== _.attempt err ===')
// 	console.log(err)
// 	console.log('=== --- ===')
// }

// try {
// 	console.log(_attempt())
// } catch (err) {
// 	console.log('=== _attempt err ===')
// 	console.log(err)
// 	console.log('=== --- ===')
// }

// asserrt.deepStrictEqual(_.attempt(), _attempt())

console.log(_.attempt(null), _.attempt(null))
asserrt.deepStrictEqual(_.attempt(null), _.attempt(null))

console.log(_.attempt(Math.floor), _.attempt(Math.floor))
asserrt.deepStrictEqual(_.attempt(Math.floor), _.attempt(Math.floor))

console.log(_.attempt(Math.floor, null), _.attempt(Math.floor, null))
asserrt.deepStrictEqual(_.attempt(Math.floor, null), _.attempt(Math.floor, null))

console.log(_.attempt(Math.floor, 1.2), _.attempt(Math.floor, 1.2))
asserrt.deepStrictEqual(_.attempt(Math.floor, 1.2), _.attempt(Math.floor, 1.2))

console.log(_.attempt(Math.floor, 1.2, 2.3, 3.4), _.attempt(Math.floor, 1.2, 2.3, 3.4))
asserrt.deepStrictEqual(_.attempt(Math.floor, 1.2, 2.3, 3.4), _.attempt(Math.floor, 1.2, 2.3, 3.4))

console.log(_.attempt(Math.floor, [1.2, 2.3, 3.4]), _.attempt(Math.floor, [1.2, 2.3, 3.4]))
asserrt.deepStrictEqual(_.attempt(Math.floor, [1.2, 2.3, 3.4]), _.attempt(Math.floor, [1.2, 2.3, 3.4]))
