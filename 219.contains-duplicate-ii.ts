/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let map = new Map<number, number[]>();
    let duplicated = false;
    nums.forEach((x,i) => {
        if(map.get(x)){
            map.get(x)?.push(i);
            duplicated = true;
        }
        else{
            map.set(x, [i]);
        }
    })

    let smaller = false;
    if(duplicated){
        for(var [key, value] of map){
            let preIndex = value[0];
            for(var i = 1; value.length > i; i ++){
                if(value[i] - preIndex <= k) smaller = true;
                preIndex = value[i];
            }
        }
    }

    return smaller;
};
// @lc code=end

