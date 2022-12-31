const { compact: _compact } = require('lodash');
const { compact } = require('../lib/array/compact');

let ary = [1, false, 'false', null, NaN, undefined];

test('compact', () => {
  expect(compact()).toEqual(_compact());
  expect(compact(1)).toEqual(_compact(1));
  expect(compact('')).toEqual(_compact(''));
  expect(compact([])).toEqual(_compact([]));
  expect(compact({})).toEqual(_compact({}));
  expect(compact([], 1)).toEqual(_compact([], 1));
  expect(compact(null)).toEqual(_compact(null));
  expect(compact([null])).toEqual(_compact([null]));
  expect(compact(ary)).toEqual(_compact(ary));
});
