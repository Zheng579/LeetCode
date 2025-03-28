/*
 * @lc app=leetcode id=29 lang=typescript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
function divide(dividend: number, divisor: number): number {
    let result: number = Number((dividend/divisor).toString().split('.')[0]);
    if(result <= -(2**31)) return -(2**31);
    else if(result >= (2**31)) return (2**31 - 1);
    return result;
};
// @lc code=end

