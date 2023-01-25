/**
 * @param {number[]} nums
 * @return {number[]}
 * You are given a 0-indexed integer array nums. In one operation, you may do the following: Choose two integers in nums that are equal. Remove both integers from nums, forming a pair.
 * The operation is done on nums as many times as possible. Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.
 */
var numberOfPairs = function(nums) {
  let map = new Map();
  let count = 0;

  nums.forEach((num) => {
      let temp = map.get(num);
      if (temp) {
          count++;
          map.delete(num);
      } else {
          map.set(num, 1);
      }
  })
  return [count, map.size];
};

let output = numberOfPairs([1,3,2,1,3,2,2]);
let expectedOutput = [3,1];

console.log(`Output is ${output} and the expected output is ${expectedOutput}`);