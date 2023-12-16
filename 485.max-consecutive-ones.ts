/*
 * @lc app=leetcode id=485 lang=typescript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
    var temp: number = 0;
    var highest: number = 0
    for(var i = 0; i < nums.length; i++){
        if(nums[i] == 1) {
            temp++;
            if(temp > highest) highest = temp;
        }
        else temp = 0;
    }
    return highest;
};
// @lc code=end

