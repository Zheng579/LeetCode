/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    // let k: number = 1;
    // nums.forEach((x, i) => {
    //     if((x) != nums[i-1]){
    //         nums[k] == x;
    //         k++;
    //     }
    // })
    // return k;
    let distinctList: number[] = [];
    nums.forEach(x => {
        if(!distinctList.some(y => y == x)) distinctList.push(x);        
    })

    nums.forEach((y,i) => {
        if(distinctList.length > i){
            nums[i] = distinctList[i];
        }
        else{
            nums[i] = 0; //
        }
    })

    return distinctList.length;
};
// @lc code=end

