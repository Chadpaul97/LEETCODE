var containsDuplicate = function (nums) {
    let values = false
    let newArray = nums.sort()
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] === newArray[i + 1]) {
            values = true
            return duplicate
        }
    }
    return values
};


// console.log(containsDuplicate([1, 2, 3, 4]))//false
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))//true


// var containsDuplicate = function (nums) {
//     let duplicate = false
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 duplicate = true
//                 return duplicate
//             }
//         }
//     }
//     return duplicate
// };


// console.log(containsDuplicate([1, 2, 3, 4]))//false
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))//true
