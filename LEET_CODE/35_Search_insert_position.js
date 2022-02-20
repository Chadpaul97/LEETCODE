var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let length = nums.length - 1
        let lastNum = nums[length]
        if (target < nums[i] || target === nums[i]) {
            console.log('top',)
            return i
        }
        if (target > lastNum) {
            console.log('bot', nums.length)
            return nums.length
        }
    }
};


console.log(searchInsert([1, 3, 5, 6], 5))//2
console.log(searchInsert([1, 3, 5, 6], 2))//1
console.log(searchInsert([1, 3, 5, 6], 7))//4