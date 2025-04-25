/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let combined = nums1.concat(nums2).sort((a, b) => a -b);
    let mid = (nums1.length + nums2.length) / 2;
    let midx = Math.floor(mid);
    if(mid - midx != 0){
        return combined[midx];
    }
    else{
        return (combined[midx] + combined[midx -1])/2;
    }
};
// @lc code=end

