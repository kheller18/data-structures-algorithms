/**
 * @param {string} sentence
 * @return {boolean}
 * A pangram is a sentence where every letter of the English alphabet appears at least once.
 * Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
 */

var checkIfPangram = function(sentence) {
    let map = new Map();
    let tempSentence = sentence.split('')
    tempSentence.forEach((letter, idx) => map.set(letter, idx))
    if (map.size === 26) {
        return true;
    }
    return false;
};

const output = checkIfPangram('thequickbrownfoxjumpsoverthelazydog');
const expectedOutput = true;

if (output === expectedOutput) {
  console.log(`Success! String is a pangram.`)
} else {
  console.log(`String is not a pangram.`)
}