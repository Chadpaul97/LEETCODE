// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.


var isPalindrome = function (x) {
    let newX = x.toString();
    for (let i = 0; i < Math.floor(newX.length / 2); i++) {
        if (newX[i] != newX[newX.length - 1 - i]) {
            return false
        }
    }
    return true
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))