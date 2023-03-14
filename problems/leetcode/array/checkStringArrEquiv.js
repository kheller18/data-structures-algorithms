/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 * Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
 * A string is represented by an array if the array elements concatenated in order forms the string.
 * RUNTIME: 68 ms (beats 56.92%)
 * MEMORY: 41.6 MB (beats 94.60%)
 */
const arrayStringsAreEqual = function(word1, word2) {
  return word1.join('') === word2.join('') ? true : false;
};

const output = arrayStringsAreEqual(["ab", "c"], ["a", "bc"]);
const expectedOutput = true;