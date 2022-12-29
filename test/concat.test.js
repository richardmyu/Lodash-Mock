const lodash = require('lodash');
const { concat, concatES5 } = require('../lib/array/concat');

test('concat', () => {
  expect(concat()).toEqual(lodash.concat());
  expect(concat('')).toEqual(lodash.concat(''));
  expect(concat(false)).toEqual(lodash.concat(false));
  expect(concat(1)).toEqual(lodash.concat(1));
  expect(concat(null)).toEqual(lodash.concat(null));
  expect(concat({ a: 1 })).toEqual(lodash.concat({ a: 1 }));
  expect(concat('as')).toEqual(lodash.concat('as'));
  expect(concat([1])).toEqual(lodash.concat([1]));
  expect(concat([1, 2])).toEqual(lodash.concat([1, 2]));
  expect(concat([1], 2, { name: 'hh' })).toEqual(lodash.concat([1], 2, { name: 'hh' }));
  expect(concat([1], NaN, null, undefined, true, '')).toEqual(lodash.concat([1], NaN, null, undefined, true, ''));
  expect(concat([1, [2], [[3]]], [2], [[3]])).toEqual(lodash.concat([1, [2], [[3]]], [2], [[3]]));
  expect(concat([1], [2, 3], [[3, 4]])).toEqual(lodash.concat([1], [2, 3], [[3, 4]]));

});

test('concatES5', () => {
  expect(concatES5()).toEqual(lodash.concat());
  expect(concatES5('')).toEqual(lodash.concat(''));
  expect(concatES5(false)).toEqual(lodash.concat(false));
  expect(concatES5(1)).toEqual(lodash.concat(1));
  expect(concatES5(null)).toEqual(lodash.concat(null));
  expect(concatES5({ a: 1 })).toEqual(lodash.concat({ a: 1 }));
  expect(concatES5('as')).toEqual(lodash.concat('as'));
  expect(concatES5([1])).toEqual(lodash.concat([1]));
  expect(concatES5([1, 2])).toEqual(lodash.concat([1, 2]));
  expect(concatES5([1], 2, { name: 'hh' })).toEqual(lodash.concat([1], 2, { name: 'hh' }));
  expect(concatES5([1], NaN, null, undefined, true, '')).toEqual(lodash.concat([1], NaN, null, undefined, true, ''));
  expect(concatES5([1, [2], [[3]]], [2], [[3]])).toEqual(lodash.concat([1, [2], [[3]]], [2], [[3]]));
  expect(concatES5([1], [2, 3], [[3, 4]])).toEqual(lodash.concat([1], [2, 3], [[3, 4]]));
});
