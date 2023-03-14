/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 * There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
 * Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
 * Note that multiple kids can have the greatest number of candies.
 * RUNTIME: 72 ms (beats 57.7%)
 * MEMORY: 41.9 MB (beats 86.55%)
 */
const kidsWithCandies = function(candies, extraCandies) {
  let tempArr = [...candies];
  let sort = tempArr.sort((a, b) => a - b);
  let max = sort[sort.length - 1];

  return candies.map((candy) => (
      candy + extraCandies >= max ? true : false
  ))
};

let output = kidsWithCandies([2,3,5,1,3], 3);
let expctedOutput = [true,true,true,false,true];