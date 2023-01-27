/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 * There is a special keyboard with all keys in a single row.
 * Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25). Initially, your finger is at index 0.
 * To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i - j|.
 * You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.
 * RUNTIME: 69 ms (beats 89.40%)
 * MEMORY: 44 MB (beats 26.49%)
 */
var calculateTime = function(keyboard, word) {
  let map = new Map(keyboard.split('').map((key, idx) => [key, idx]));
  let pos = 0;

  const sum = word.split('').reduce((prev, next) => {
      const cur = map.get(next);
      prev += Math.abs(cur - pos);
      pos = cur;
      return prev;
  }, pos);

  return sum;
};

let output = calculateTime("abcdefghijklmnopqrstuvwxyz", "cba");
let expectedOutput = 4;

if (output === expectedOutput) {
  console.log(`Success!`);
} else {
  console.log(`Unsuccessful`);
}