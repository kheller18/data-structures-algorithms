/**
 * @param {number[]} nums
 * @return {number[]}
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
 * That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
 */

var smallerNumbersThanCurrent = function(nums) {
  let map = new Map();
  let sorted = nums.slice().sort((a, b) => a - b);
  sorted.forEach((number, idx) => map.has(number) ? null : map.set(number, idx));
  return nums.map((num) => map.get(num));
};

let output = smallerNumbersThanCurrent([8,1,2,2,3]);
let expectedOutput = [4,0,1,1,3];

if (output === expectedOutput) {
  console.log(`Success! ${output} matches ${expectedOutput}.`);
} else {
  console.log(`Unsuccessful. Expected output is ${expectedOutput}.`);
}