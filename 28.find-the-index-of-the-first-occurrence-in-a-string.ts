/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
    let index: number = -1;
    if(haystack.includes(needle))
        index = haystack.indexOf(needle);
    return index;
};
// @lc code=end

