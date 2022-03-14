/*

33 - Search in Rotated Sorted Array
https://leetcode.com/problems/search-in-rotated-sorted-array/

This solution employs a modified binary search approach. We
start in the middle and expand outward, left and right. Each
loop checks for a match with both left and right pointers. If
no match is found, we decrement and increment the pointers
accordingly. If no match is found before termination of the loop,
we return -1.

The loop continues so long as the left pointer remains at or above
0 and the right pointer is under the length of the array (or at the
last index).

*/

var search = function(nums, target) {
    
    let middle = Math.floor(nums.length / 2);
    let left = middle - 1;
    let right = middle;
    
    while (left >= 0 || right < nums.length) {
        
        if (nums[left] === target) {
            return left;
        } else if (nums[right] === target) {
            return right;
        };
        
        left--;
        right++;
    };
    
    return -1;
};