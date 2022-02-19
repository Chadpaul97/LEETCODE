var removeElement = function (nums, val) {
    //holds place of what its pointing to
    let pointer = 0;
    //loop interates through array
    for (let i = 0; i < nums.length; i++) {
        //if the value of nums[i] not equal to val
        if (nums[i] !== val) {
            //set pointer to the next number which is not val
            nums[pointer] = nums[i]
            //move pointer to next value in array
            pointer++
        }
    }
    //return how many values pointer moved foward 
    return pointer
};


console.log(removeElement([3, 2, 2, 3], 3))
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))




// var removeElement = function (nums, val) {
//     nums = nums.filter((v) => { return v != val })
//     console.log(nums)
//     return nums
// };


// // console.log(removeElement([3, 2, 2, 3], 3))
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))