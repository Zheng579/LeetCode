/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
    const freqMap = new Map<number, number>();
    for(const num of nums){
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    let sorted = Array.from(freqMap.entries()).sort((a,b) => b[1] - a[1]);

    return sorted.slice(0,k).map(entry => entry[0]);
};
// @lc code=end

