/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 * You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.
 * The ith item is said to match the rule if one of the following is true:
 * ruleKey == "type" and ruleValue == typei.
 * ruleKey == "color" and ruleValue == colori.
 * ruleKey == "name" and ruleValue == namei.
 * Return the number of items that match the given rule.
 * RUNTIME: 80 ms (beats 73.48%)
 * MEMORY: 45.6 MB (beats 82.22%)
 */
var countMatches = function(items, ruleKey, ruleValue) {
  const map = {'type': 0, 'color': 1, 'name': 2};

  return items.reduce((accumulator, item) => item[map[ruleKey]] === ruleValue ? accumulator += 1 : accumulator, 0);
};

const output = countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver");
const expectedOutput = 1;