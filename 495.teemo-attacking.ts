/*
 * @lc app=leetcode id=495 lang=typescript
 *
 * [495] Teemo Attacking
 */

// @lc code=start
function findPoisonedDuration(timeSeries: number[], duration: number): number {
    // let poisonTime: number[] = [];
    // for(var i=0; i<timeSeries.length; i++){
    //     for(let j = 0; j < duration; j++){
    //         poisonTime.push(timeSeries[i] + j);
    //     }
    // }
    // let poisonSec = [...new Set(poisonTime)];
    // return poisonSec.length;
    const uniqueTimePoints = new Set<number>();

    for (let i = 0; i < timeSeries.length; i++) {
        for (let j = 0; j < duration; j++) {
            uniqueTimePoints.add(timeSeries[i] + j);
        }
    }

    return uniqueTimePoints.size;
};
// @lc code=end

