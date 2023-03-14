/**
 * @param {string[]} words
 * @return {number}
 * International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:
 * 'a' maps to ".-", 'b' maps to "-...", 'c' maps to "-.-.", and so on.
 * Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.
 * For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
 * Return the number of different transformations among all words we have.
 * RUNTIME: 88 ms (beats 37.28%);
 * Memory: 43.9 MB (beats 32.33%)
 */
var uniqueMorseRepresentations = function(words) {
  let map = new Map();
  let code = {a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--.."};

  words.map((word) => {
      let ret = '';
      word.split('').map((letter) => {
          ret += code[letter];
      })
      let temp = map.get(ret);
      if (!temp) {
          map.set(ret, 1);
      } else {
          map.set(ret, temp + 1);
      }
  })

  return map.size;
}

const output = uniqueMorseRepresentations(["gin","zen","gig","msg"]);
const expectedOutput = 2;

if (output === expectedOutput) {
  console.log(`Success, you found ${output}.`);
} else {
  console.log(`Unsuccessful. The output should be ${expectedOutput}.`);
}