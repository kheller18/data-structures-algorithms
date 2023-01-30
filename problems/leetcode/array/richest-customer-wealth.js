/**
 * @param {number[][]} accounts
 * @return {number}
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
 * A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
 * Input: accounts = [[1,2,3],[3,2,1]]
 * Output: 6
 * Explanation: 1st customer has wealth = 1 + 2 + 3 = 6. 2nd customer has wealth = 3 + 2 + 1 = 6. Both customers are considered the richest with a wealth of 6 each, so return 6.
 * RUNTIME: 51 ms (beats 98.93%)
 * MEMORY: 42.1 MB (beats 52.92%)
 */
var maximumWealth = function(accounts) {
  let maxReturn = 0;
  accounts.forEach((account) => {
      const max = account.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      if (max > maxReturn) { maxReturn = max; }
  })
  return maxReturn;
};

const output = maximumWealth([[1,2,3],[3,2,1]]);
const expectedOutput = 6;

if (output === expectedOutput) {
  console.log(`Success! Found ${output} for maximum value.`)
} else {
  console.log(`Incorrect. Maximum value should be ${expectedOutput}.`)
}