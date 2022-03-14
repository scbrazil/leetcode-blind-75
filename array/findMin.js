/*

153 - Find Minimyum in Rotated Sorted Array
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

This solution implements a binary search approach.

Upon each (while) loop, we can test whether to move left
or right. If the right pointer (which starts at the last element)
is less than the middle pointer, we know the end of the
sequence is to the rightt and the lowest number follows.

If the right pointer is greater than the middle pointer,
then we should look left. Moving to the right will only result
in larger values.

*/

var findMin = function(nums) {

    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
        let middle = ~~((left + right) / 2);
        
        if (nums[middle] > nums[right]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    
    return nums[left];
    
};