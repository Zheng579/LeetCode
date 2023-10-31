/*
 * @lc app=leetcode id=13 lang=csharp
 *
 * [13] Roman to Integer
 */

// @lc code=start
public class Solution {
    public int RomanToInt(string s) {
        int total = 0;
        int temp = 0;
        for(int i = s.Length -1; i >= 0; i--){
            int current = MapString(s[i]);
            if(current < temp){
                total -=current;
            }                
            else{
                total += current;
            }
            temp = current;
        }
        return total;
    }

    private int MapString(char roman){
        return roman.ToString() switch 
        {
            "I" => 1,
            "V" => 5,
            "X" => 10,
            "L" => 50,
            "C" => 100,
            "D" => 500,
            "M" => 1000,
            _ => 0,
        };
    }
}
// @lc code=end