/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    let map = new Map<number, number>();
    let duplicated = false;
    nums.forEach(x => {
        if(map.get(x)){
            duplicated = true;
        }
        else{
            map.set(x, 1);
        }
    })
    return duplicated;
};
// @lc code=end

