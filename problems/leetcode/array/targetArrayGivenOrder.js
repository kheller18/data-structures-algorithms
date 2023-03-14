/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 * Given two arrays of integers nums and index. Your task is to create target array under the following rules:
 * Initially target array is empty. From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
 * Repeat the previous step until there are no elements to read in nums and index. Return the target array. It is guaranteed that the insertion operations will be valid.
 * RUNTIME: 69 ms (beats 54.90%)
 * MEMORY: 41.9 MB (beats 73.66%)
 */
const createTargetArray = function(nums, index) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) { arr.splice(index[i], 0, nums[i]); }

  return arr;
};

const output = createTargetArray([0,1,2,3,4], [0,1,2,2,1]);
const expectedOutput = [0,4,1,3,2];