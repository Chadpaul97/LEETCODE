var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0
    }
    //count just keeps an anchor pointer
    let count = 0
    //loops through nums 
    for (let i = 0; i < nums.length; i++) {
        //if values dont match 
        if (nums[count] !== nums[i]) {
            //increase count
            count++
            //replaces number in array with next value thats not the same as the anchor which is count
            nums[count] = nums[i];
        }
    }
    return count + 1
};

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));