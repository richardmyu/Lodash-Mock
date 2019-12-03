const assert = require('assert').strict
const _ = require('lodash')
const { _compact } = require('../../lib/Array/compact')

let ary = [1, false, 'false', null, NaN, undefined]

assert.deepStrictEqual(_.compact(), _compact())

assert.deepStrictEqual(_.compact([]), _compact([]))

assert.deepStrictEqual(_.compact({}), _compact({}))

assert.deepStrictEqual(_.compact(1), _compact(2))

assert.deepStrictEqual(_.compact(ary), _compact(ary))
