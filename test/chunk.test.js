const { chunk: _chunk } = require('lodash');
const { chunk } = require('../lib/array/chunk');

let ary = [1, 2, '3x', { a: 12 }];

test('chunk', () => {
  expect(chunk([])).toEqual(_chunk([]));
  expect(chunk()).toEqual(_chunk());
  expect(chunk(null)).toEqual(_chunk(null));
  expect(chunk(ary)).toEqual(_chunk(ary));
  expect(chunk(ary, 0)).toEqual(_chunk(ary, 0));
  expect(chunk(ary, 1)).toEqual(_chunk(ary, 1));
  expect(chunk(ary, -1)).toEqual(_chunk(ary, -1));
  expect(chunk(ary, 0.2)).toEqual(_chunk(ary, 0.2));
  expect(chunk(ary, 1.2)).toEqual(_chunk(ary, 1.2));
  expect(chunk(ary, 2)).toEqual(_chunk(ary, 2));
  expect(chunk(ary, 3)).toEqual(_chunk(ary, 3));
  expect(chunk(ary, 5)).toEqual(_chunk(ary, 5));
  expect(chunk(ary, '5')).toEqual(_chunk(ary, '5'));
  expect(chunk(ary, '5x')).toEqual(_chunk(ary, '5x'));
  expect(chunk(ary, '0')).toEqual(_chunk(ary, '0'));
});
