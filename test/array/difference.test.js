const asserrt = require('assert').strict
const _ = require('lodash')
const { _difference } = require('../../lib/Array/difference')

asserrt.deepStrictEqual(_.difference(), _difference())

asserrt.deepStrictEqual(_.difference(1), _difference(1))

asserrt.deepStrictEqual(_.difference(null), _difference(null))

asserrt.deepStrictEqual(_.difference(1, 1), _difference(1, 1))

asserrt.deepStrictEqual(_.difference(1, 1, 1), _difference(1, 1, 1))

asserrt.deepStrictEqual(_.difference([1, 2, 3], 1), _difference([1, 2, 3], 1))

asserrt.deepStrictEqual(_.difference([1, 2, 3], 1, 1), _difference([1, 2, 3], 1, 1))

asserrt.deepStrictEqual(_.difference([1, 2, 3], [1]), _difference([1, 2, 3], [1]))

asserrt.deepStrictEqual(_.difference([1, 2, 3], ['1']), _difference([1, 2, 3], ['1']))

asserrt.deepStrictEqual(_.difference([1, 2, 3], { 1: 2, length: 1 }), _difference([1, 2, 3], { 1: 2, length: 1 }))

asserrt.deepStrictEqual(_.difference([1, 2, 3], { 1: '12', length: 1 }), _difference([1, 2, 3], { 1: '12', length: 1 }))

asserrt.deepStrictEqual(_.difference([1, 2, 3], { 1: 'xx', length: 1 }), _difference([1, 2, 3], { 1: 'xx', length: 1 }))
