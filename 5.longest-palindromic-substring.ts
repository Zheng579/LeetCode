/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
    let startIdx = 0,  endIdx = 0;
    const expend = (left: number, right: number): number => {
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left--; 
            right ++;
        }
        return right - left - 1;
    }
    for(let i = 0; i < s.length; i++){
        const odd = expend(i, i);
        const even = expend(i, i+1);
        const len = Math.max(odd, even);

        if(len > endIdx - startIdx){
            startIdx = i - Math.floor((len - 1)/2);
            endIdx = i + Math.floor(len/2);
        }
    }
    return s.substring(startIdx, endIdx + 1);
};
// @lc code=end

