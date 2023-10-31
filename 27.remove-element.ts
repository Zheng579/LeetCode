/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    let filteredList: number[] = [];
    nums.forEach(x=> {
        if(val != x) filteredList.push(x);
    })//output should be [2,2]

    nums.forEach((y,i) => {
        if(filteredList.length > i){
            nums[i] = filteredList[i];
        }
        else{
            nums[i] = 0; //
        }
    })//output should be [2,2,0,0]

    return filteredList.length;
};
// @lc code=end

