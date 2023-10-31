/*
 * @lc app=leetcode id=9 lang=csharp
 *
 * [9] Palindrome Number
 */

// @lc code=start
public class Solution{
    public bool IsPalindrome(int x) {
        char[] charList = x.ToString().ToCharArray();
        string asc = "", desc = "";
        for(int i = 0; i < charList.Length; i++){
            asc = asc+charList[i];
        }

        for(int j = charList.Length-1; j >= 0; j--){
            desc = desc+charList[j];
        }
        if(asc == desc) return true;
        else return false;
    }
}

// @lc code=end

