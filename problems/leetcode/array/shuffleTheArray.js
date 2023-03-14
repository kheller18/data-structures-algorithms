/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
 * Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 * Input: nums = [2,5,1,3,4,7], n = 3
 * Output: [2,3,5,4,1,7]
 * Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
 * RUNTIME: 78 ms (beats 62.56%).
 * MEMORY: 44.4 MB (beats 63.93%)
 */

const shuffle = function(nums, n) {
  let arr = [];
  for (let i = 0; i < nums.length -n; i++) {
      arr.push(nums[i]);
      arr.push(nums[i+n]);
  }
  return arr;
};

let output = shuffle([2,5,1,3,4,7], 3);
let expectedOutput = [2,3,5,4,1,7];