/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    var result: number[][] = [];
    nums.sort((a,b) => a - b);
    for(let i = 0; nums.length - 2 > i; i++){
        if(i> 0 && nums[i] === nums[i-1]) continue;
        
        let [left, right] = [i+1, nums.length - 1]
        while(right > left){
            let total = nums[i] + nums[left] + nums[right];
            if(total == 0){
                result.push([nums[i], nums[left], nums[right]]);
                right--;
                left++

                while(right > left && nums[left] == nums[left - 1]) left ++;
                while(right > left && nums[right] == nums[right + 1]) right --;
            }
            else if(total < 0) left++;
            else right--;
        }
    }

    return result;
};
// @lc code=end

