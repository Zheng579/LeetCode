/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let result: number[] = [];
    for (let i = 0; i < nums.length - 1; i++){
        for (let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                result = [i, j]
                return result;
            }
        }
    }
    return result;
};
// @lc code=end

