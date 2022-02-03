const assert = require('assert').strict
const _ = require('lodash')
const { _chunk } = require('../lib/chunk')

let ary = [1, 2, '3x', { a: 12 }]

assert.deepStrictEqual(_.chunk(ary), _chunk(ary))

assert.deepStrictEqual(_.chunk([]), _chunk([]))

assert.deepStrictEqual(_.chunk(), _chunk())

assert.deepStrictEqual(_.chunk(null), _chunk(null))

assert.deepStrictEqual(_.chunk(ary, 0), _chunk(ary, 0))

assert.deepStrictEqual(_.chunk(ary, 1), _chunk(ary, 1))

assert.deepStrictEqual(_.chunk(ary, -1), _chunk(ary, -1))

assert.deepStrictEqual(_.chunk(ary, 0.2), _chunk(ary, 0.2))

assert.deepStrictEqual(_.chunk(ary, 1.2), _chunk(ary, 1.2))

assert.deepStrictEqual(_.chunk(ary, 2), _chunk(ary, 2))

assert.deepStrictEqual(_.chunk(ary, 3), _chunk(ary, 3))

assert.deepStrictEqual(_.chunk(ary, 5), _chunk(ary, 5))

assert.deepStrictEqual(_.chunk(ary, '5'), _chunk(ary, '5'))

assert.deepStrictEqual(_.chunk(ary, '5x'), _chunk(ary, '5x'))
