/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for(let i = m, j = 0; i < nums1.length; i ++, j++){
        nums1[i] = nums2[j]; 
    }
    nums1.sort();
    
    // let nums1: number[] = [1,2,3,0,0,0], m: number = 3, nums2: number[] = [2,5,6], n: number = 3;
    // nums1 = nums1.slice(0, m).concat(nums2.slice(0,n)).sort();
};
// @lc code=end

