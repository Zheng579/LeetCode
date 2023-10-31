/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
    if (numRows <= 0) {
        return [];
    }

    const triangle: number[][] = [[1]];

    for (let i = 1; i < numRows; i++) {
        const prevRow = triangle[i - 1];
        const newRow: number[] = [1];

        for (let j = 1; j < i; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }

        newRow.push(1);
        triangle.push(newRow);
    }

    return triangle;
};
// @lc code=end

