/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 * You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:
 * Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table. Align the substitution table with the regular English alphabet.
 * Each letter in message is then substituted using the table. Spaces ' ' are transformed to themselves.
 * For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
 * Return the decoded message.
 */
var decodeMessage = function(key, message) {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let map = new Map();
  let outputStr = '';
  let count = 0;
  let sortedKey = key.split('');
  let sortedMessage = message.split('');

  sortedKey.forEach((key) => {
      let temp = map.get(key);
      if (!temp && key !== ' ') {
          map.set(key, alphabet[count]);
          count++;
      }
  })

  sortedMessage.forEach((letter) => {
      (letter !== ' ' ? outputStr += map.get(letter) : outputStr += ' ');
  })

  return outputStr;
};

let output = decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv');
let expectedOutput = 'this is a secret';

if (output === expectedOutput) {
  console.log('Message decoded successfully.');
} else {
  console.log('Message unsuccessfully decoded.');
}