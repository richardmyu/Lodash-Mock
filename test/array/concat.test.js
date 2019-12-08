const assert = require('assert').strict
const _ = require('lodash')
const { _concat, _concatEs5 } = require('../../lib/Array/concat')

assert.deepStrictEqual(_.concat(), _concat(), _concatEs5())

assert.deepStrictEqual(_.concat(''), _concat(''), _concatEs5(''))

assert.deepStrictEqual(_.concat(false), _concat(false), _concatEs5(false))

assert.deepStrictEqual(_.concat(1), _concat(1), _concatEs5(1))

assert.deepStrictEqual(_.concat(null), _concat(null), _concatEs5(null))

assert.deepStrictEqual(_.concat({ a: 1 }), _concat({ a: 1 }), _concatEs5({ a: 1 }))

assert.deepStrictEqual(_.concat('as'), _concat('as'), _concatEs5('as'))

assert.deepStrictEqual(_.concat([1]), _concat([1]), _concatEs5([1]))

assert.deepStrictEqual(_.concat([1], 2, 3), _concat([1], 2, 3), _concatEs5([1], 2, 3))

assert.deepStrictEqual(_.concat([1], NaN, null, undefined, true, ''), _concat([1], NaN, null, undefined, true, ''), _concatEs5([1], NaN, null, undefined, true, ''))

assert.deepStrictEqual(_.concat([1, [2], [[3]]], [2], [[3]]), _concat([1, [2], [[3]]], [2], [[3]]), _concatEs5([1, [2], [[3]]], [2], [[3]]))
