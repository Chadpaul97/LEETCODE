//Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.


var lengthOfLastWord = function (s) {
    startWord = false;
    count = 0;
    for (var i = s.length - 1; i > - 1; i--) {
        if (s[i] != " ") {
            startWord = true;
        }
        if (startWord) {
            if (s[i] === " ") {
                return count;
            }
            else {
                count++
            }
        }
    }
    return count
};


console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));