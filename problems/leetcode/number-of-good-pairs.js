/**
 * @param {number[]} nums
 * @return {number}
 */

var numIdenticalPairs = function(nums) {
  let map = new Map();
  let count = 0;

  for (i = 0; i < nums.length; i++) {
      let temp = map.get(nums[i]);
      if (temp) {
          count += temp;
          map.set(nums[i], temp+1);
      } else {
          map.set(nums[i], 1);
      }
  }
  return count;
};

let output = numIdenticalPairs([1,2,3,1,1,3]);
let expectedOutput = 4;

if (output === expectedOutput) {
  console.log(`Success! Found ${output}/${expectedOutput} pairs.`)
} else {
  console.log(`Incorrect number of pairs found. Expected ${expectedOutput}.`)
}