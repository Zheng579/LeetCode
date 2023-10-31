/*
 * @lc app=leetcode id=414 lang=typescript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
function thirdMax(nums: number[]): number {
    let distinctList = nums.filter((x, i, arr) => arr.indexOf(x) == i);
    let sortedList = distinctList.sort((a,b) => b-a);
    return sortedList[2] || sortedList[0];
};
// @lc code=end

