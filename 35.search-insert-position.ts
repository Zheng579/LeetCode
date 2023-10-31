/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    let index = nums.indexOf(target);
    if(index > -1) return index;
    //need to be improved
    else {
        for(let i = 0; i < nums.length; i++){
            if(nums[i] < target) {
                index = i + 1; 
            }
        }
        if(index == -1) {
            if(target > nums[nums.length-1]) index = nums.length;
            else index = 0
        }

        return index;
    }
};
// @lc code=end

