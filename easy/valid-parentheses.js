// https://leetcode.com/problems/valid-parentheses/

/* Algorithm
1. Create a helper function that returns
  a. true if a is the compliment of b
2. add the first element into the stack
3. loop through the length of the string
4. check if current element and top of stack are compliments
  a. if so, pop the stack
5. otherwise continue pushing elements to the stack
6. if the stack is empty, return true

/**
 * @param {string} s
 * @return {boolean}
 */
// Input: s = "()[]{}"
// Output: true
//             0123
// Input: s = "{[]}"
var isValid = function (s) {
  if (s.length === 0) return false;
  // add the first element into the stack
  let stack = [s[0]];
  // loop through the length of the string
  for (let i = 1; i < s.length; i++) {
    // if an element has a complement on the top of the stack
    // then it means that it got closed correctly
    // therefore, remove the top item from the stack and continue
    if (isCompliment(s[i], stack[stack.length - 1])) {
      stack.pop
    } else {
      // otherwise, we keep adding to the stack until we see a compliment
      // as in the condition above
      stack.push(s[i]);
    }
  }
  // if we reached the end of the string and the stack is 0
  // that means that every compliment was found and we can return true
  // otherwise, if the length is not 0, somethign didn't have a compliment
  return stack.length === 0;
};

const isCompliment = (a, b) => {
  if (a === ")") return b === "("
  if (a === "]") return b === "["
  if (a === "}") return b === "{"
  return false;
}