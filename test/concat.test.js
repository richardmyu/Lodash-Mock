// const assert = require('assert').strict;
// const _ = require('lodash');
// const { _concat, _concatEs5 } = require('../lib/concat');

// console.log(`=== test: ${_concat.name, _concatEs5.name} strat ===`);

// // console.log('_.concat', _.concat())
// // console.log('_concat', _concat())
// // console.log('_concatEs5', _concatEs5())
// assert.deepStrictEqual(_.concat(), _concat());
// assert.deepStrictEqual(_.concat(), _concatEs5());

// // console.log('_.concat', _.concat(''))
// // console.log('_concat', _concat(''))
// // console.log('_concatEs5', _concatEs5(''))
// assert.deepStrictEqual(_.concat(''), _concat(''));
// assert.deepStrictEqual(_.concat(''), _concatEs5(''));

// // console.log('_.concat', _.concat(false))
// // console.log('_concat', _concat(false))
// // console.log('_concatEs5', _concatEs5(false))
// assert.deepStrictEqual(_.concat(false), _concat(false));
// assert.deepStrictEqual(_.concat(false), _concatEs5(false));

// // console.log('_.concat', _.concat(1))
// // console.log('_concat', _concat(1))
// // console.log('_concatEs5', _concatEs5(1))
// assert.deepStrictEqual(_.concat(1), _concat(1));
// assert.deepStrictEqual(_.concat(1), _concatEs5(1));

// // console.log('_.concat', _.concat(null))
// // console.log('_concat', _concat(null))
// // console.log('_concatEs5', _concatEs5(null))
// assert.deepStrictEqual(_.concat(null), _concat(null));
// assert.deepStrictEqual(_.concat(null), _concatEs5(null));

// // console.log('_.concat', _.concat({ a: 1 }))
// // console.log('_concat', _concat({ a: 1 }))
// // console.log('_concatEs5', _concatEs5({ a: 1 }))
// assert.deepStrictEqual(_.concat({ a: 1 }), _concat({ a: 1 }));
// assert.deepStrictEqual(_.concat({ a: 1 }), _concatEs5({ a: 1 }));

// // console.log('_.concat', _.concat('as'))
// // console.log('_concat', _concat('as'))
// // console.log('_concatEs5', _concatEs5('as'))
// assert.deepStrictEqual(_.concat('as'), _concat('as'));
// assert.deepStrictEqual(_.concat('as'), _concatEs5('as'));

// // console.log('_.concat', _.concat([1]))
// // console.log('_concat', _concat([1]))
// // console.log('_concatEs5', _concatEs5([1]))
// assert.deepStrictEqual(_.concat([1]), _concat([1]));
// assert.deepStrictEqual(_.concat([1]), _concatEs5([1]));

// // console.log('_.concat', _.concat([1], 2, { name: 'hh' }))
// // console.log('_concat', _concat([1], 2, { name: 'hh' }))
// // console.log('_concatEs5', _concatEs5([1], 2, { name: 'hh' }))
// assert.deepStrictEqual(_.concat([1], 2, { name: 'hh' }), _concat([1], 2, { name: 'hh' }));
// assert.deepStrictEqual(_.concat([1], 2, { name: 'hh' }), _concatEs5([1], 2, { name: 'hh' }));

// // console.log('_.concat', _.concat([1], NaN, null, undefined, true, ''))
// // console.log('_concat', _concat([1], NaN, null, undefined, true, ''))
// // console.log('_concatEs5', _concatEs5([1], NaN, null, undefined, true, ''))
// assert.deepStrictEqual(_.concat([1], NaN, null, undefined, true, ''), _concat([1], NaN, null, undefined, true, ''));
// assert.deepStrictEqual(_.concat([1], NaN, null, undefined, true, ''), _concatEs5([1], NaN, null, undefined, true, ''));

// // console.log('_.concat', _.concat([1, [2], [[3]]], [2], [[3]]))
// // console.log('_concat', _concat([1, [2], [[3]]], [2], [[3]]))
// // console.log('_concatEs5', _concatEs5([1, [2], [[3]]], [2], [[3]]))
// assert.deepStrictEqual(_.concat([1, [2], [[3]]], [2], [[3]]), _concat([1, [2], [[3]]], [2], [[3]]));
// assert.deepStrictEqual(_.concat([1, [2], [[3]]], [2], [[3]]), _concatEs5([1, [2], [[3]]], [2], [[3]]));

// // console.log('_.concat', _.concat([1], [2, 3], [[3, 4]]))
// // console.log('_concat', _concat([1], [2, 3], [[3, 4]]))
// // console.log('_concatEs5', _concatEs5([1], [2, 3], [[3, 4]]))
// assert.deepStrictEqual(_.concat([1], [2, 3], [[3, 4]]), _concat([1], [2, 3], [[3, 4]]));
// assert.deepStrictEqual(_.concat([1], [2, 3], [[3, 4]]), _concatEs5([1], [2, 3], [[3, 4]]));

// console.log('All cases pass the test.');

// console.log('=== End ===');
