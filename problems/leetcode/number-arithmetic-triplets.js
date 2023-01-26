/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 * You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:
 * i < j < k,
 * nums[j] - nums[i] == diff,
 * nums[k] - nums[j] == diff.
 * Return the number of unique arithmetic triplets.
 * RUNTIME: 84 ms (beats 56.38%)
 * MEMORY: 42.8 MB (beats 11.7%)
 */

var arithmeticTriplets = function(nums, diff) {
  let map = new Map();
  let count = 0;

  nums.forEach((num, idx) => {
      let output = num - diff;
      if (map.has(output) && map.has(output-diff)) {
          count++;
      }
      map.set(num, idx);
  })
  return count;
};

const output = arithmeticTriplets([0,1,4,6,7,10], 3);
const expectedOutput = 2;

if (output === expectedOutput) {
  console.log(`Success! You found ${output} arithmetic triplets`);
} else {
  console.log(`Unsuccessful. There are ${expectedOutput} arithmetic triplets.`)
}