/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    let start = 0;
    let end = digits.length -1;
    while(end >= start){
        digits[end]++;
        if(digits[end] == 10) {
            digits[end] = 0;
            if(end-1 == -1) digits.unshift(1);
        }
        else break;
        end--;
    }

    return digits;
};
// @lc code=end

