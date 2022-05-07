const _ = require('lodash');
const { _chunk } = require('../lib/chunk');

let ary = [1, 2, '3x', { a: 12 }];

test('_chunk', () => {
  expect(_chunk(ary)).toBe(_.chunk(ary));
  expect(_chunk([])).toBe(_.chunk([]));
  expect(_chunk()).toBe(_.chunk());
  expect(_chunk(null)).toBe(_.chunk(null));
  expect(_chunk(ary, 0)).toBe(_.chunk(ary, 0));
  expect(_chunk(ary, 1)).toBe(_.chunk(ary, 1));
  expect(_chunk(ary, -1)).toBe(_.chunk(ary, -1));
  expect(_chunk(ary, 0.2)).toBe(_.chunk(ary, 0.2));
  expect(_chunk(ary, 1.2)).toBe(_.chunk(ary, 1.2));
  expect(_chunk(ary, 2)).toBe(_.chunk(ary, 2));
  expect(_chunk(ary, 3)).toBe(_.chunk(ary, 3));
  expect(_chunk(ary, 5)).toBe(_.chunk(ary, 5));
  expect(_chunk(ary, '5')).toBe(_.chunk(ary, '5'));
  expect(_chunk(ary, '5x')).toBe(_.chunk(ary, '5x'));
  expect(_chunk(ary, '0')).toBe(_.chunk(ary, '0'));
});
