var romanToInt = function (s) {

    const romanNum = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let sum = 0;
    for (var i = s.length - 1; i > -1; i--) {
        if (romanNum[s[i]] > romanNum[s[i - 1]]) {
            sum += romanNum[s[i]] - romanNum[s[i - 1]];
            i--
        } else {
            sum += romanNum[s[i]]
        }
    }
    return sum;
}
console.log(romanToInt("MCMXCIV"));