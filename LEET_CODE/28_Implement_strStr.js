var strStr = function (haystack, needle) {
    //needle length has nothing return 0
    if (needle.length = 0) {
        return 0
    }
    //interate through haystack - needle length since you dont need to waste time going through all of haystack
    for (i = 0; i <= haystack.length - needle.length; i++) {
        //needle === index of (i, i + needle.length)  meaning=> (start ,end )
        if (needle === haystack.substring(i, i + needle.length)) {
            console.log(i, i + needle.length)
            console.log(haystack.substring(i, i + needle.length))
            return i
        }
    }
    //otherwise all it returns -1
    return -1
};

console.log(strStr("hello", "ll"))
console.log(strStr("aaaaa", "bba"))
console.log(strStr("", ""))