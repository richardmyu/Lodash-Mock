const lodash = require('lodash');
const { differenceBy } = require('../lib/array/differenceByBy');

test('differenceBy', () => {
  expect(differenceBy()).toEqual(lodash.differenceBy());
  expect(differenceBy(1)).toEqual(lodash.differenceBy(1));
  expect(differenceBy(null)).toEqual(lodash.differenceBy(null));
  expect(differenceBy(undefined)).toEqual(lodash.differenceBy(undefined));
  expect(differenceBy('')).toEqual(lodash.differenceBy(''));
  expect(differenceBy('12')).toEqual(lodash.differenceBy('12'));
  expect(differenceBy(1, 2)).toEqual(lodash.differenceBy(1, 2));
  expect(differenceBy([1, 2, 3], 1)).toEqual(lodash.differenceBy([1, 2, 3], 1));
  expect(differenceBy([1, 2, 3], 1, 1)).toEqual(lodash.differenceBy([1, 2, 3], 1, 1));
  expect(differenceBy([1, 2, 3], [1])).toEqual(lodash.differenceBy([1, 2, 3], [1]));
  expect(differenceBy([1, 2, 3], ['1'])).toEqual(lodash.differenceBy([1, 2, 3], ['1']));
  expect(differenceBy([1, 2, 3], { 1: 2, length: 1 })).toEqual(lodash.differenceBy([1, 2, 3], { 1: 2, length: 1 }));
  expect(differenceBy([1, 2, 3], { 1: '12', length: 1 })).toEqual(lodash.differenceBy([1, 2, 3], { 1: '12', length: 1 }));
  expect(differenceBy([1, 2, 3], { 1: 'xx', length: 1 })).toEqual(lodash.differenceBy([1, 2, 3], { 1: 'xx', length: 1 }));
});
