/*

 - Maximum Product Subarray
 https://leetcode.com/problems/maximum-product-subarray/

While this problem seems similar to maxSubArray, the approach is
different due to the effects of negative numbers in multiplication.

*/

var maxProduct = function(nums) {
    
    let result = nums[0];
    let min = result;
    let max = result;
    
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        
        let newMin = Math.min(num, min * num, max * num);
        max = Math.max(num, min * num, max * num);
        
        min = newMin;
        
        result = Math.max(result, max);
    }
    
    return result;
    
};