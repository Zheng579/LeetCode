/*
 * @lc app=leetcode id=381 lang=typescript
 *
 * [381] Insert Delete GetRandom O(1) - Duplicates allowed
 */

// @lc code=start
class RandomizedCollection {
    memory: number[] = [];
    constructor() {
    }

    insert(val: number): boolean {
        let tempBool = this.memory.includes(val);
        this.memory.push(val);
        return !tempBool;
    }

    remove(val: number): boolean {
        if(!this.memory.includes(val)) return false;

        let index = this.memory.indexOf(val);
        if(index > -1) this.memory.splice(index, 1);
        return true;
    }

    getRandom(): number {
        let randIndex = Math.floor(Math.random() * this.memory.length);
        return this.memory[randIndex];
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

