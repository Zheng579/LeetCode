/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
    const n = nums.length;
    let expectedSum = (n * (n + 1)) / 2; // Sum of numbers from 0 to n
    let actualSum = nums.reduce((total, curr) => total + curr);
    return expectedSum - actualSum;
}
// @lc code=end

