// // 1) TWO SUM 
// const nums = [2, 7, 11, 15];
// const target = 9;

// var twoSum = function (nums, target) {
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 console.log([i, j])
//             }
//         }
//     }
// }

// 28) Implement strStr()
var haystack = "heeeeeeello";
var needle = "ll";

// var haystack = "aaaaa";
// var needle = "bba";

// var haystack = "";
// var needle = "";

    function strStr (haystack, needle) {
    if (needle.length = 0) {
        return 0
    }
    for (var i = 0; i <= haystack.length - needle.length; i++) {
        if (needle === haystack.substring(i, i + needle.length)) {
            return i
        }
    }
    return -1
}
console.log(strStr(haystack,needle))