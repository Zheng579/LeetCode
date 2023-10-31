/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
    let k: number[][] = [];
    for(let i = 1; rowIndex + 1 >= i; i++){
        let tempRows: number[] = [];
        for(let j = 0; j < i; j++){
            if(j == 0 || j == i-1)
            {
                tempRows.push(1);
            }
            else
            {
                let tempSum = k[i-2][j-1] + k[i-2][j];
                tempRows.push(tempSum);
            }
        }
        k.push(tempRows)
    }
    return k[rowIndex];
};
// @lc code=end

