/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
    let s_array = s.trim().split(' ');
    return s_array[s_array.length -1].length;
};
// @lc code=end

