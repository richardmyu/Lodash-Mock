const { concat: _concat } = require('lodash');
const { concat, concatES5 } = require('../lib/array/concat');

test('concat', () => {
  expect(concat()).toEqual(_concat());
  expect(concat('')).toEqual(_concat(''));
  expect(concat(false)).toEqual(_concat(false));
  expect(concat(1)).toEqual(_concat(1));
  expect(concat(null)).toEqual(_concat(null));
  expect(concat({ a: 1 })).toEqual(_concat({ a: 1 }));
  expect(concat('as')).toEqual(_concat('as'));
  expect(concat([1])).toEqual(_concat([1]));
  expect(concat([1, 2])).toEqual(_concat([1, 2]));
  expect(concat([1], 2, { name: 'hh' })).toEqual(_concat([1], 2, { name: 'hh' }));
  expect(concat([1], NaN, null, undefined, true, '')).toEqual(_concat([1], NaN, null, undefined, true, ''));
  expect(concat([1, [2], [[3]]], [2], [[3]])).toEqual(_concat([1, [2], [[3]]], [2], [[3]]));
  expect(concat([1], [2, 3], [[3, 4]])).toEqual(_concat([1], [2, 3], [[3, 4]]));

});

test('concatES5', () => {
  expect(concatES5()).toEqual(_concat());
  expect(concatES5('')).toEqual(_concat(''));
  expect(concatES5(false)).toEqual(_concat(false));
  expect(concatES5(1)).toEqual(_concat(1));
  expect(concatES5(null)).toEqual(_concat(null));
  expect(concatES5({ a: 1 })).toEqual(_concat({ a: 1 }));
  expect(concatES5('as')).toEqual(_concat('as'));
  expect(concatES5([1])).toEqual(_concat([1]));
  expect(concatES5([1, 2])).toEqual(_concat([1, 2]));
  expect(concatES5([1], 2, { name: 'hh' })).toEqual(_concat([1], 2, { name: 'hh' }));
  expect(concatES5([1], NaN, null, undefined, true, '')).toEqual(_concat([1], NaN, null, undefined, true, ''));
  expect(concatES5([1, [2], [[3]]], [2], [[3]])).toEqual(_concat([1, [2], [[3]]], [2], [[3]]));
  expect(concatES5([1], [2, 3], [[3, 4]])).toEqual(_concat([1], [2, 3], [[3, 4]]));
});
