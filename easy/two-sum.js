// https://leetcode.com/problems/two-sum/

/* Algorithm
1. loop through the array
2. populate a hashmap with { nums[i]: i }
3. loop through the array a second time
4. check for complimentary = target - nums[i]
    a. if complimentary is in hashmap AND
    b. not accounting for itself (current index)
5. target exists in array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const hashMap = {};
  // populate the hash map
  for (let i = 0; i < nums.length; i++) {
      hashMap[nums[i]] = i;
  }
  
  let returnArr = [];
  // iterate through second time
  for (let i = 0; i < nums.length; i++) {
      if (hashMap[target - nums[i]] && hashMap[target - nums[i]] !== i){
          // hasMap has the compliment
          returnArr.push(i);
          returnArr.push(hashMap[target - nums[i]]);
          return returnArr;
      }
  }
};