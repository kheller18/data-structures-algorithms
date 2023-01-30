/**
 * @param {string[]} sentences
 * @return {number}
 * A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
 * You are given an array of strings sentences, where each sentences[i] represents a single sentence. Return the maximum number of words that appear in a single sentence.
 * RUNTIME: 65 ms (beats 84.56%)
 * MEMORY: 44.4 MB (beats 20.41%)
 */
var mostWordsFound = function(sentences) {
  let max = 0;

  sentences.forEach((sentence) => {
      const tempSentence = sentence.split(" ").length;
      if (tempSentence > max) { max = tempSentence; }
  })
  return max;
};

let output = differenceOfSum(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]);
let expectedOutput = 6;

if (output === expectedOutput) {
  console.log(`Success! Found ${output} for maximum value.`);
} else {
  console.log(`Incorrect. Maximum value should be ${expectedOutput}.`);
}