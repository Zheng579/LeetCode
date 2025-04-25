/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
    const hashMap = new Map<string, string[]>();
    for(let word of strs){
        const sortedKey = word.split("").sort().join('');
        if(!hashMap.has(sortedKey)){
            hashMap.set(sortedKey, []);
        }
        hashMap.get(sortedKey)!.push(word);
    }
    return Array.from(hashMap.values());

    // const map: { [key: string]: string[] } = {};

    // for (const word of strs) {
    //     const sorted = word.split('').sort().join('');
    //     if (!map[sorted]) {
    //         map[sorted] = [];
    //     }
    //     map[sorted].push(word);
    // }

    // return Object.values(map);
};
// @lc code=end

