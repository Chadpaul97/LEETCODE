var maxSubArray = function (nums) {
    let totalSum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        //
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
        totalSum = Math.max(totalSum, nums[i])
    }
    return totalSum
};



console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))//6
// console.log(maxSubArray([1]))//1
// console.log(maxSubArray([5, 4, -1, 7, 8]))//23


//Adds total sum of array
// const sum = [-2, 1, -3, 4, -1, 2, 1, -5, 4].reduce((partialSum, a) => partialSum + a, 0);
// console.log(sum); // 1
