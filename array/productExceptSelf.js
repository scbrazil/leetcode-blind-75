/*

238 - Product of Array Except Self
https://leetcode.com/problems/product-of-array-except-self/

Time complexity: O(n)
Space complexity:

This solution builds products by creating and traversing arrays,
storing new products as it goes.

First, we iterate the length of the input array from left to right. This
new array has an index 0 value of 1 that acts as a multiplier for the
elements in the input array. Any other value would cause an error or
incorrect product.

The traversal begins at the second element, but multiplies the previous elements
in the input array and left array. This starts the process, multiplying
the first input array value by 1. The products are assigned to the current
index in the left array, populating it.

Second, we iterate the length of the input array from right to left,
beginning with the second to last array. The last element of the right array
is assigned a default value of 1 for the same reasons given above.
We multiply the proceeding element of the input array by the proceeding
element in the right array. The products are assigned to the current index
of the right array.

Finally, we iterate the length of the input array a final time, beginning
at the first index [0]. We assign each current element of the result array,
from beginning to end, the products of the current index of the left array
and right array. This populates the result array with the final products.

By beginning at the second index in the first iteration and the second to
last in the second array, we avoid including those values per the instructions.

input = [1, 2, 3]
left = [1, , ]
right = [ , , 1]
result [ , , , ]

left = [1, 1, 2]
right = [ 6, 3, 1]
result [6, 3, 2]

*/

var productExceptSelf = function(nums) {
    let length = nums.length;
    
    let left = new Array(length);
    left[0] = 1;
    
    let right = new Array(length);
    right[length - 1] = 1;
    
    let result = new Array(length);
    
    for (let i = 1; i < length; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }
    
    for (let i = length - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }
    
    for (let i = 0; i < length; i++) {
        result[i] = left[i] * right[i];
    }
    
    return result;
};