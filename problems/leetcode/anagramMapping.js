/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * You are given two integer arrays nums1 and nums2 where nums2 is an anagram of nums1. Both arrays may contain duplicates.
 * Return an index mapping array mapping from nums1 to nums2 where mapping[i] = j means the ith element in nums1 appears in nums2 at index j. 
 * If there are multiple answers, return any of them.
 * An array a is an anagram of an array b means b is made by randomizing the order of the elements in a.
 */
var anagramMappings = function(nums1, nums2) {
  let map = new Map();
  nums2.forEach((num, idx) => map.set(num, idx));
  return nums1.map(num => map.get(num));
};

let output = anagramMappings([12,28,46,32,50], [50,12,32,46,28]);
let expectedOutput = [1,4,3,2,0];

console.log(`Your output: ${output}.`);
console.log(`Expected ouput: ${expectedOutput}.`);
