const { difference: _difference } = require('lodash');
const { difference } = require('../lib/array/difference');

test('difference', () => {
  expect(difference()).toEqual(_difference());
  expect(difference(1)).toEqual(_difference(1));
  expect(difference(null)).toEqual(_difference(null));
  expect(difference(undefined)).toEqual(_difference(undefined));
  expect(difference('')).toEqual(_difference(''));
  expect(difference('12')).toEqual(_difference('12'));
  expect(difference(1, 2)).toEqual(_difference(1, 2));
  expect(difference([1, 2, 3], 1)).toEqual(_difference([1, 2, 3], 1));
  expect(difference([1, 2, 3], 1, 1)).toEqual(_difference([1, 2, 3], 1, 1));
  expect(difference([1, 2, 3], 1, [2])).toEqual(_difference([1, 2, 3], 1, [2]));
  expect(difference([1, 2, 3], [3], 1)).toEqual(_difference([1, 2, 3], [3], 1));
  expect(difference([1, 2, 3], [1])).toEqual(_difference([1, 2, 3], [1]));
  expect(difference([1, 2, 3], [1, 2])).toEqual(_difference([1, 2, 3], [1, 2]));
  expect(difference([1, 2, 3], ['1'])).toEqual(_difference([1, 2, 3], ['1']));
  expect(difference([1, 2, 3], { 1: 2, length: 1 })).toEqual(_difference([1, 2, 3], { 1: 2, length: 1 }));
  expect(difference([1, 2, 3], { 1: '12', length: 1 })).toEqual(_difference([1, 2, 3], { 1: '12', length: 1 }));
  expect(difference([1, 2, 3], { 1: 'xx', length: 1 })).toEqual(_difference([1, 2, 3], { 1: 'xx', length: 1 }));
});
