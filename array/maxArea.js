/*

11 - Container with Most Water
https://leetcode.com/problems/container-with-most-water/

This solution uses left and right pointers to close
in on possibilities while tracking the highest
waterline found.

We determine the current waterline at any given time
by multiplying the smaller of the left and right lines
by their difference in distance (right index minus left
index). This number is compared against the largest found
overall and potentially replaces it.

We then move the pointers inward. If the left value is
less than the right value, we move the left point forward.
This allows us to look for higher possibilities against
our known highest value (at the right pointer).

The opposite is true when the left value is higher than
the right value.

*/

var maxArea = function(height) {
    
    let highestWaterLine = 0,
        left = 0,
        right = height.length - 1;
    
    while (left < right) {
        let smallerLine = Math.min(height[left], height[right]);
        let currentWaterLine = smallerLine * (right - left);
        
        if (currentWaterLine > highestWaterLine) {
            highestWaterLine = currentWaterLine;
        }
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--
        }
    }
    
    return highestWaterLine;
    
};