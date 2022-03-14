/*

1 - Two Sum
https://leetcode.com/problems/two-sum/

This solution finds the integers the match the target
and tracks their indices with a data structure (object).

Traverse the input array. Find the difference between the
target and current element. This provides an integer to search
for in the tracking object.

If the object contains an integer matching the difference value,
we have found a match. Return an array containing the indices
of the current element and the stored integer.

But how do we know the index of the stored value? Simple.
If no match is found in the current loop, add the current
element as a key to the object with the value of its index.
It will then be available to test against proceeding elements.

*/


var twoSum = function(nums, target) {
    let tracker = {};
    
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        
        if (tracker.hasOwnProperty(difference)) {
            return [i, tracker[difference]];
        } else {
            tracker[nums[i]] = i;
        }
    }
    
    return false;
};