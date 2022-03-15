/*

70 - Climbing Stairs
https://leetcode.com/problems/climbing-stairs/

*/


// Recursive - Memoization
const climbStairs = (n) => {
    
    const counter = (stairsRemaining, savedResults) => {
        if (stairsRemaining < 0) {
            return 0;
        }
        
        if (stairsRemaining === 0) {
            return 1;
        }
        
        if (savedResults[stairsRemaining]) {
            return savedResults[stairsRemaining];
        }
        
        savedResults[stairsRemaining] =
            counter(stairsRemaining - 1, savedResults) +
            counter(stairsRemaining - 2, savedResults);
        
        return savedResults[stairsRemaining];
    }
    
    return counter(n, {});
};