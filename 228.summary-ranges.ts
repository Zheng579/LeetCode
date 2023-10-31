/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
    let range: string[] = [];
    let start = nums[0];
    let item = "";
    for(var i = 0; nums.length > i; i++){
        if(nums[i+1] != nums[i]+1){
            if(start == nums[i]) item = start.toString();
            else item = start + "->" + nums[i];
            range.push(item);
            start = nums[i+1];
        }
    }
    return range;
};
// @lc code=end

