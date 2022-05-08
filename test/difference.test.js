const lodash = require('lodash');
const { difference, differenceSect, differenceSet } = require('../lib/difference');

test('difference',()=>{
  expect(difference()).toEqual(lodash.difference());
  expect(difference(1)).toEqual(lodash.difference(1));
  expect(difference(null)).toEqual(lodash.difference(null));
  expect(difference(undefined)).toEqual(lodash.difference(undefined));
  expect(difference('')).toEqual(lodash.difference(''));
  expect(difference('12')).toEqual(lodash.difference('12'));
  expect(difference(1,2)).toEqual(lodash.difference(1,2));
  expect(difference([1,2,3],1)).toEqual(lodash.difference([1,2,3],1));
  expect(difference([1,2,3],1,1)).toEqual(lodash.difference([1,2,3],1,1));
  expect(difference([1,2,3],[1])).toEqual(lodash.difference([1,2,3],[1]));
  expect(difference([1,2,3],['1'])).toEqual(lodash.difference([1,2,3],['1']));
  expect(difference([1, 2, 3], { 1: 2, length: 1 })).toEqual(lodash.difference([1, 2, 3], { 1: 2, length: 1 }));
  expect(difference([1, 2, 3], { 1: '12', length: 1 })).toEqual(lodash.difference([1, 2, 3], { 1: '12', length: 1 }));
  expect(difference([1, 2, 3], { 1: 'xx', length: 1 })).toEqual(lodash.difference([1, 2, 3], { 1: 'xx', length: 1 }));
});

test('differenceSect', () => {
  expect(differenceSect()).toEqual(lodash.difference());
  expect(differenceSect(1)).toEqual(lodash.difference(1));
  expect(differenceSect(null)).toEqual(lodash.difference(null));
  expect(differenceSect(undefined)).toEqual(lodash.difference(undefined));
  expect(differenceSect('')).toEqual(lodash.difference(''));
  expect(differenceSect('12')).toEqual(lodash.difference('12'));
  expect(differenceSect(1, 2)).toEqual(lodash.difference(1, 2));
  expect(differenceSect([1, 2, 3], 1)).toEqual(lodash.difference([1, 2, 3], 1));
  expect(differenceSect([1, 2, 3], 1, 1)).toEqual(lodash.difference([1, 2, 3], 1, 1));
  expect(differenceSect([1, 2, 3], [1])).toEqual(lodash.difference([1, 2, 3], [1]));
  expect(differenceSect([1, 2, 3], ['1'])).toEqual(lodash.difference([1, 2, 3], ['1']));
  expect(differenceSect([1, 2, 3], { 1: 2, length: 1 })).toEqual(lodash.difference([1, 2, 3], { 1: 2, length: 1 }));
  expect(differenceSect([1, 2, 3], { 1: '12', length: 1 })).toEqual(lodash.difference([1, 2, 3], { 1: '12', length: 1 }));
  expect(differenceSect([1, 2, 3], { 1: 'xx', length: 1 })).toEqual(lodash.difference([1, 2, 3], { 1: 'xx', length: 1 }));
});

test('differenceSet', () => {
  expect(differenceSet()).toEqual(lodash.difference());
  expect(differenceSet(1)).toEqual(lodash.difference(1));
  expect(differenceSet(null)).toEqual(lodash.difference(null));
  expect(differenceSet(undefined)).toEqual(lodash.difference(undefined));
  expect(differenceSet('')).toEqual(lodash.difference(''));
  expect(differenceSet('12')).toEqual(lodash.difference('12'));
  expect(differenceSet(1, 2)).toEqual(lodash.difference(1, 2));
  expect(differenceSet([1, 2, 3], 1)).toEqual(lodash.difference([1, 2, 3], 1));
  expect(differenceSet([1, 2, 3], 1, 1)).toEqual(lodash.difference([1, 2, 3], 1, 1));
  expect(differenceSet([1, 2, 3], [1])).toEqual(lodash.difference([1, 2, 3], [1]));
  expect(differenceSet([1, 2, 3], ['1'])).toEqual(lodash.difference([1, 2, 3], ['1']));
  expect(differenceSet([1, 2, 3], { 1: 2, length: 1 })).toEqual(lodash.difference([1, 2, 3], { 1: 2, length: 1 }));
  expect(differenceSet([1, 2, 3], { 1: '12', length: 1 })).toEqual(lodash.difference([1, 2, 3], { 1: '12', length: 1 }));
  expect(differenceSet([1, 2, 3], { 1: 'xx', length: 1 })).toEqual(lodash.difference([1, 2, 3], { 1: 'xx', length: 1 }));
});
