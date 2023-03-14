/**
 * @param {number[]} arr
 * @return {boolean}
 * Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
 */

var uniqueOccurrences = function(arr) {
  let map = new Map();
  let tempArr = [];
  let result = true;

  arr.forEach((item, idx) => {
      let temp = map.get(item);
      if (temp) {
          map.set(item, temp+1);
      } else {
          map.set(item, 1);
      }
  })

  map.forEach((item) => {
      if (tempArr.includes(item)) {
          result = false;
      }
      tempArr.push(item);
  })
  return result;
};

let output = uniqueOccurrences([1,2,2,1,1,3]);
let expectedOutput = true;

if (output === expectedOutput) {
  console.log(`Each occurrence is unique!`);
} else {
  console.log('Each occurrence is not unique');
}