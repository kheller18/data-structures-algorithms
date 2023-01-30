/**
 * @param {string[]} operations
 * @return {number}
 * There is a programming language with only four operations and one variable X:
 * ++X and X++ increments the value of the variable X by 1.
 * --X and X-- decrements the value of the variable X by 1.
 * RUNTIME: 81 ms (beats 38.37%)
 * MEMORY: 42.2 MB (beats 81.97%)
 */
var finalValueAfterOperations = function(operations) {
  let X = 0;
  operations.forEach((oper) => {
      (oper === 'X++' || oper === '++X') ? X++ : X--
  })
  return X;
};

let output = finalValueAfterOperations(["--X","X++","X++"]);
let expectedOutput = 1;

if (output === expectedOutput) {
  console.log(`Success! ${output}/${expectedOutput} found.`);
} else {
  console.log(`Incorrect. Expected ${expectedOutput}`);
}