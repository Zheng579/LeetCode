/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
    let i = 0;
    const n = s.length;
    const maxInt = 2 ** 31 - 1;
    const minInt = -(2 ** 31);

    while (i < n && s[i] === ' ') {
        i++;
    }

    let sign = 1;
    if (i < n && (s[i] === '-' || s[i] === '+')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    let result = 0;
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);

        if (result > Math.floor(maxInt / 10) || 
            (result === Math.floor(maxInt / 10) && digit > maxInt % 10)) {
            return sign === 1 ? maxInt : minInt;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
};
// @lc code=end

