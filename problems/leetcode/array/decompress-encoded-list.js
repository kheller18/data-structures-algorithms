/**
 * @param {number[]} nums
 * @return {number[]}
 * We are given a list nums of integers representing a list compressed with run-length encoding. Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).
 * For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list. Return the decompressed list.
 * RUNTIME: 84 ms (beats 73.47%)
 * MEMORY: 47.8 MB (beats 10.95%)
 */
var decompressRLElist = function(nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i += 2) {
      let tempArr = new Array(nums[i]).fill(nums[i+1]);
      arr = arr.concat(tempArr);
  }

  return arr;
};

const output = decompressRLElist([1,2,3,4]);
const expectedOutput = [2,4,4,4];