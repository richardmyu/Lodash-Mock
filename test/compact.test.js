const lodash = require('lodash');
const { compact } = require('../lib/array/compact');

let ary = [1, false, 'false', null, NaN, undefined];

test('compact', () => {
  expect(compact()).toEqual(lodash.compact());
  expect(compact(1)).toEqual(lodash.compact(1));
  expect(compact('')).toEqual(lodash.compact(''));
  expect(compact([])).toEqual(lodash.compact([]));
  expect(compact({})).toEqual(lodash.compact({}));
  expect(compact([], 1)).toEqual(lodash.compact([], 1));
  expect(compact(null)).toEqual(lodash.compact(null));
  expect(compact([null])).toEqual(lodash.compact([null]));
  expect(compact(ary)).toEqual(lodash.compact(ary));
});
