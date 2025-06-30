const twoSum = require("./01-two_sum");

test("should return [0, 1] for [2, 7, 11, 15], target 9", () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  expect(twoSum(nums, target)).toEqual([0, 1]);
});

test("returns correct indices for [3, 2, 4], target 6", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test("returns correct indices for [3, 3], target 6", () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

test("returns correct indices for [1, 5, 3, 4], target 8", () => {
  expect(twoSum([1, 5, 3, 4], 8)).toEqual([1, 2]);
});

test("returns correct indices for [2,4,3,5,6], target 6", () => {
  expect(twoSum([2, 4, 3, 5, 6], 7)).toEqual([1, 2]);
});
