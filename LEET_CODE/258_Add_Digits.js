// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

var addDigits = function (num) {
    let sum = 0;
    let newNum = num.toString()
    for (let i = 0; i < newNum.length; i++) {
        newNumInt = parseInt(newNum[i])
        sum = sum + newNumInt
    }
    if (sum < 10) {
        return sum
    }
    else {
        return addDigits(sum);
    }
};

// console.log(addDigits(38))
// console.log(addDigits(0))
// console.log(addDigits(334))
console.log(addDigits(33234234242234))