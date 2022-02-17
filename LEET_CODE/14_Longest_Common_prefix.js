var longestCommonPrefix = function (strs) {
    let common = "";
    for (let i = 0; i < strs[0].length; i++) {
        let temp = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== temp) {
                return common
            }
        }
        common += temp
    }
    return common
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))//"fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]))//""
console.log(longestCommonPrefix(["a"]))//""