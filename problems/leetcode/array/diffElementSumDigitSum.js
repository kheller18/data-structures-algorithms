/**
 * @param {number[]} nums
 * @return {number}
 * You are given a positive integer array nums. The element sum is the sum of all the elements in nums. The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
 * Return the absolute difference between the element sum and digit sum of nums. Note that the absolute difference between two integers x and y is defined as |x - y|.
 * RUNTIME: 63 ms (beats 94.68%);
 * MEMORY: 46.6 MB (beats 27.2%);
 */
const differenceOfSum = function(nums) {
  let digitSum = 0;
  let elementSum = 0;

  nums.forEach((num) => {
      elementSum += num;
      const split = num.toString().split('');
      const sum = split.reduce((accumulator, initialValue) => parseInt(accumulator) + parseInt(initialValue), 0);
      digitSum += sum;
  })
  return Math.abs(elementSum - digitSum);
};

let output = differenceOfSum([1,15,6,3]);
let expectedOutput = 9;

if (output === expectedOutput) {
  console.log(`Success! Found ${output} for maximum value.`);
} else {
  console.log(`Incorrect. Maximum value should be ${expectedOutput}.`);
}