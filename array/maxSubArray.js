/*

53 - Max Subarray
https://leetcode.com/problems/maximum-subarray/

We can find the greatest sum by continuously adding
the next element to a "current subarray" sum
and comparing it against the largest overall sum found.

Iterate through the input array. Each loop first checks
which is larger: (1) adding the current element to the
current subarray, or (2) the current subarray sum as it is.

Next, on each loop, we check the largest between (1) the
current subarray sum and (2) the largest sum found overall.

After traversal, return the highest sum found.

*/

var maxSubArray = function(nums) {
    
    let result = nums[0];
    let currentSubarray = result;
    
    for (let i = 1; i < nums.length; i++) {
        currentSubarray = Math.max(nums[i], (currentSubarray + nums[i]));
        result = Math.max(result, currentSubarray);
    }
    
    return result;
    
};