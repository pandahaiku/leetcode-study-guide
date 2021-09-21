//https://leetcode.com/problems/climbing-stairs/
//You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/* Algorithm
1. let an array hold subproblems
2. set arr[0] and arr[1] to 1
  a. because arr[n] will hold number of ways
    to get to the n'th step
3. loop from 2 to n (inclusive)
4. set arr[i] to
  a. arr[i - 1] + arr[i - 2]
  b. the n'th step will take all the possible
     combinations from one step and two steps back

     
// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  let arr = [];
  arr[0] = 1;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

 var climbStairsIterative = function(n) {
   // n = 0: 1
   // n = 1: 1
   //           1         0
   // n = 2: [n - 1] + [n - 2]
   //           1    +    1   =   2
   //
   //           2         1
   // n = 3: [n - 1] + [n - 2]
   //           2    +    1   =   3

  let temp = 0;
  let n1 = 1;
  let n2 = 1;
  for (let i = 0; i < n - 1; i++) {
    temp = n1;
    n1 = n2;
    n2 = n1 + temp;
  }
  return n2;
}

console.log("n = 3: ", climbStairsIterative(3));
console.log("n = 4: ",climbStairsIterative(4));
console.log("n = 5: ",climbStairsIterative(5));
console.log("n = 6: ",climbStairsIterative(6));