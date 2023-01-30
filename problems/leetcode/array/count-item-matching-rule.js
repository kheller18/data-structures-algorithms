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
 * RUNTIME: 89 ms (beats 46.22%)
 * MEMORY: 45.8 MB (beats 70.7%)
 */
var countMatches = function(items, ruleKey, ruleValue) {
  let count = 0;

  items.forEach((item) => {
      switch (ruleKey) {
          case 'type':
              item[0] === ruleValue ? count++ : null;
              break;

          case 'color':
              item[1] === ruleValue ? count++ : null;
              break;

          case 'name':
              item[2] === ruleValue ? count++ : null;
              break;

          default: null;
      }
  });

  return count;
};

const output = countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver");
const expectedOutput = 1;