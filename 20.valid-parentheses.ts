/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    let list: string[] = [];
    for(let i = 0; i < s.length; i++){
        if(list[list.length-1] == "{" && s[i] == "}") list.pop();
        else if(list[list.length-1] == "[" && s[i] == "]") list.pop();
        else if(list[list.length-1] == "(" && s[i] == ")") list.pop();
        else list.push(s[i]);
    }
    return list.length == 0;
};
// @lc code=end

