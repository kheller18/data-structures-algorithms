/**
 * @param {number[]} nums
 * @return {number[]}
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
 * Specifically, ans is the concatenation of two nums arrays. Return the array ans.
 * Input: nums = [1,2,1]
 * Output: [1,2,1,1,2,1]
 * Explanation: The array ans is formed as follows: ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]] = [1,2,1,1,2,1]
 * RUNTIME: 71 ms (beats 95.74%)
 * MEMORY: 44.5 MB (beats 94.6%)
 */
const getConcatenation = function(nums) {
  let ans = nums;
  nums.forEach((num) => {
      ans.push(num);
  })
  return ans;
};

let output = getConcatenation([1,2,1]);
let expectedOutput = [1,2,1,1,2,1];