var isValid = function (s) {
    let valid = []
    for (let i = 0; i < s.length; i++) {
        let endOfString = valid[valid.length - 1]
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            valid.push(s[i]);

        } else if (s[i] === ')' && endOfString === '(' && valid.length != 0) {
            valid.pop();

        } else if (s[i] === ']' && endOfString === '[' && valid.length != 0) {
            valid.pop();

        } else if (s[i] === '}' && endOfString === '{' && valid.length != 0) {
            valid.pop();

        } else {
            return false;
        }
    }

    return valid.length === 0;
};
console.log(isValid("([{}])"))//true
console.log(isValid("(){}}{"))//false
console.log(isValid("([)]"))//false
console.log(isValid("()"))//true
console.log(isValid("()[]{}"))//true
console.log(isValid("(]"))//false
console.log(isValid("("))//false