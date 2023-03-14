/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 * There is a hidden integer array arr that consists of n non-negative integers.
 * It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].
 * You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].
 * Return the original array arr. It can be proved that the answer exists and is unique.
 * RUNTIME: 100 ms (beats 75.85%)
 * MEMORY: 48.4 MB (beats 58.78%)
 */
var decode = function(encoded, first) {
  let arr = [first];
  encoded.forEach((x, i) => arr.push(arr[i] ^ x));
  return arr;
};

const output = decode([1,2,3], 1);
const expectedOutput = [1,0,2,1];