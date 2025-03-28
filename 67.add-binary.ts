/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
    let num = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    return num.toString(2);
};
// @lc code=end

