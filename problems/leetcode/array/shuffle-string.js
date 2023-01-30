/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 * You are given a string s and an integer array indices of the same length.
 * The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string. Return the shuffled string.
 */
var restoreString = function(s, indices) {
  let map = new Map();
  let output = '';

  indices.forEach((indices, idx) => {
      map.set(indices, s.charAt(idx));
  })

  for (let i = 0; i < map.size; i++) {
      output += map.get(i);
  }

  return output;
};

const output = restoreString("codeleet", [4,5,6,7,0,2,1,3]);
const expectedOutput = "leetcode";