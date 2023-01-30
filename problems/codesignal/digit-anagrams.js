/*
Given an array of integers a, your task is to count the number of pairs i and j, such that a[i] and a[j] are digit anagrams. Two integers are considered to be digit anagrams if they
contain the same digits. In orther words, one can be obtained from the other by rearranging the digits (or trivially, if the numbers are equal). For example, 54275 and 45572 are digit anagrams,
but 321 and 782 are not (since they don't contain the same digits). 220 and 22 are also not considered as digit anagrams, since they don't have the same number of digits.
*/

function digitAnagrams(a) {
  let map = new Map();
  let count = 0;

  a.forEach((int) => {
    let string = int.toString();
    string = string.split('').sort().join('');
    let temp = map.get(string);
    if (temp) {
      count += temp;
      map.set(string, temp + 1);
    } else {
      map.set(string, 1);
    }
  })

  return count;
}

let output = digitAnagrams([25,35,872,228,53,278,872]);
let expectedOutput = 4;

if (output === expectedOutput) {
  console.log('Success!')
} else {
  console.log(`Unsuccessful ${output}`)
}
