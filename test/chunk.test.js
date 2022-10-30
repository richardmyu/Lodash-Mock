const lodash = require('lodash');
const { chunk } = require('../lib/array/chunk');

let ary = [1, 2, '3x', { a: 12 }];

test('chunk', () => {
  expect(chunk(ary)).toEqual(lodash.chunk(ary));
  expect(chunk([])).toEqual(lodash.chunk([]));
  expect(chunk()).toEqual(lodash.chunk());
  expect(chunk(null)).toEqual(lodash.chunk(null));
  expect(chunk(ary, 0)).toEqual(lodash.chunk(ary, 0));
  expect(chunk(ary, 1)).toEqual(lodash.chunk(ary, 1));
  expect(chunk(ary, -1)).toEqual(lodash.chunk(ary, -1));
  expect(chunk(ary, 0.2)).toEqual(lodash.chunk(ary, 0.2));
  expect(chunk(ary, 1.2)).toEqual(lodash.chunk(ary, 1.2));
  expect(chunk(ary, 2)).toEqual(lodash.chunk(ary, 2));
  expect(chunk(ary, 3)).toEqual(lodash.chunk(ary, 3));
  expect(chunk(ary, 5)).toEqual(lodash.chunk(ary, 5));
  expect(chunk(ary, '5')).toEqual(lodash.chunk(ary, '5'));
  expect(chunk(ary, '5x')).toEqual(lodash.chunk(ary, '5x'));
  expect(chunk(ary, '0')).toEqual(lodash.chunk(ary, '0'));
});
