const { difference: _difference } = require('lodash');
const { difference, differenceSect, differenceSet } = require('../lib/array/difference');

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
  expect(difference([1, 2, 3], [1])).toEqual(_difference([1, 2, 3], [1]));
  expect(difference([1, 2, 3], ['1'])).toEqual(_difference([1, 2, 3], ['1']));
  expect(difference([1, 2, 3], { 1: 2, length: 1 })).toEqual(_difference([1, 2, 3], { 1: 2, length: 1 }));
  expect(difference([1, 2, 3], { 1: '12', length: 1 })).toEqual(_difference([1, 2, 3], { 1: '12', length: 1 }));
  expect(difference([1, 2, 3], { 1: 'xx', length: 1 })).toEqual(_difference([1, 2, 3], { 1: 'xx', length: 1 }));
});

test('differenceSect', () => {
  expect(differenceSect()).toEqual(_difference());
  expect(differenceSect(1)).toEqual(_difference(1));
  expect(differenceSect(null)).toEqual(_difference(null));
  expect(differenceSect(undefined)).toEqual(_difference(undefined));
  expect(differenceSect('')).toEqual(_difference(''));
  expect(differenceSect('12')).toEqual(_difference('12'));
  expect(differenceSect(1, 2)).toEqual(_difference(1, 2));
  expect(differenceSect([1, 2, 3], 1)).toEqual(_difference([1, 2, 3], 1));
  expect(differenceSect([1, 2, 3], 1, 1)).toEqual(_difference([1, 2, 3], 1, 1));
  expect(differenceSect([1, 2, 3], [1])).toEqual(_difference([1, 2, 3], [1]));
  expect(differenceSect([1, 2, 3], ['1'])).toEqual(_difference([1, 2, 3], ['1']));
  expect(differenceSect([1, 2, 3], { 1: 2, length: 1 })).toEqual(_difference([1, 2, 3], { 1: 2, length: 1 }));
  expect(differenceSect([1, 2, 3], { 1: '12', length: 1 })).toEqual(_difference([1, 2, 3], { 1: '12', length: 1 }));
  expect(differenceSect([1, 2, 3], { 1: 'xx', length: 1 })).toEqual(_difference([1, 2, 3], { 1: 'xx', length: 1 }));
});

test('differenceSet', () => {
  expect(differenceSet()).toEqual(_difference());
  expect(differenceSet(1)).toEqual(_difference(1));
  expect(differenceSet(null)).toEqual(_difference(null));
  expect(differenceSet(undefined)).toEqual(_difference(undefined));
  expect(differenceSet('')).toEqual(_difference(''));
  expect(differenceSet('12')).toEqual(_difference('12'));
  expect(differenceSet(1, 2)).toEqual(_difference(1, 2));
  expect(differenceSet([1, 2, 3], 1)).toEqual(_difference([1, 2, 3], 1));
  expect(differenceSet([1, 2, 3], 1, 1)).toEqual(_difference([1, 2, 3], 1, 1));
  expect(differenceSet([1, 2, 3], [1])).toEqual(_difference([1, 2, 3], [1]));
  expect(differenceSet([1, 2, 3], ['1'])).toEqual(_difference([1, 2, 3], ['1']));
  expect(differenceSet([1, 2, 3], { 1: 2, length: 1 })).toEqual(_difference([1, 2, 3], { 1: 2, length: 1 }));
  expect(differenceSet([1, 2, 3], { 1: '12', length: 1 })).toEqual(_difference([1, 2, 3], { 1: '12', length: 1 }));
  expect(differenceSet([1, 2, 3], { 1: 'xx', length: 1 })).toEqual(_difference([1, 2, 3], { 1: 'xx', length: 1 }));
});
