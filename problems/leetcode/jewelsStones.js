/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let map = new Map();
  let count = 0;

  for (i = 0; i < stones.length; i++) {
      let temp = map.get(stones[i]);
      if (temp) {
          map.set(stones[i], temp+1);
      } else {
          map.set(stones[i], 1);
      }
  }

  for (j = 0; j < jewels.length; j++) {
      if (map.get(jewels[j])) {
          count += map.get(jewels[j]);
      }
  }
  return count;
};

let output = numJewelsInStones('aA', 'aAAbbbb');
let expectedOutput = 3;

if (output === expectedOutput) {
  console.log(`Success! ${output}/${expectedOutput} found.`);
} else {
  console.log(`Incorrect. Expected ${expectedOutput}`);
}