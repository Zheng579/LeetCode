/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
    const numA = BigInt("0b" + a);
    const numB = BigInt("0b" + b);
    const sum = numA + numB;
    return sum.toString(2);
}
// @lc code=end

