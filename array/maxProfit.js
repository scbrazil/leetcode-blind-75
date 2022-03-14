/*

121 - Best Time to Buy and Sell Stock
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

This solution tracks the lowest value and the highest
return found thus far. This enables us to constantly
check for the best results, ensuring we buy at the
lowest price. But just because a buying price is lower
at some point doesn't mean it is the best time to buy.
We could find a return that is higher than any return
yielded by that subsequent lower purchase price and
selling prices.

The lowest price begins with a default value of the input
array's first value. The highest return has a default value
of 0.

We iterate over the input array beginning on the second
element (second day). It is the first day we can sell.
Determine whether the difference between the current
element and the lowest price found is higher than the
highest return found so far. If it is, reassign the highest
return to this difference. If it isn't, leave the highest
return alone.

Next, determine whether the current element is a lower
purchase price than the previously found lowest price.
If it is, reassign the lowest price.

By the end of traversal, we will have compared all possible
purchasing and selling prices. Return the highest return.

*/

var maxProfit = function(prices) {
    let highestReturn = 0;
    let lowestPrice = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        highestReturn = Math.max(highestReturn, prices[i] - lowestPrice);
        lowestPrice = Math.min(lowestPrice, prices[i]);
    }
    
    return highestReturn;
};