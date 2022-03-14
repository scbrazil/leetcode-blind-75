/*

217 - Contains Duplicate
https://leetcode.com/problems/contains-duplicate/

This solutions compares each value against a data
structure (object) for previously found matching
values.

First, through iteration of the array, we check
whether the object contains the current value. This
reduces work slightly, as each loop needs to check, but adding
values only occurs when there is not match. Granted, this
only helps one time, when the matching value is found.

If a match is found, return true immediately in the loop.
If no match is found, return false.

*/

var containsDuplicate = function(nums) {
    let tracker = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (tracker.hasOwnProperty(nums[i])) {
            return true;
        } else {
            tracker[nums[i]] = 1;
        }
    }
    
    return false;
};