/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    let data = new Map<number, number>();
    for(let i = 0; nums.length > i; i++){
        if(!data.get(nums[i])){
            data.set(nums[i], 1);
        }
        else{
            //let value: number =  data.get(nums[i]) ? data.get(nums[i])! : 0;
            data.set(nums[i],  data.get(nums[i])! + 1);
        }
    }
    return Array.from(data.entries()).reduce((a, b) => a[1] < b[1] ? b : a)[0];
};
// @lc code=end

