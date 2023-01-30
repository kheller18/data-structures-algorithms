/**
 * @param {string[]} operations
 * @return {number}
 * There is a programming language with only four operations and one variable X:
 * ++X and X++ increments the value of the variable X by 1.
 * --X and X-- decrements the value of the variable X by 1.
 * RUNTIME: 80 ms (beats 40.53%)
 * MEMORY: 42.5 MB (beats 46.59%)
 */
var finalValueAfterOperations = function(operations) {
  let X = 0;
  operations.forEach((oper) => {
      (oper[1] === '+') ? X++ : X--
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