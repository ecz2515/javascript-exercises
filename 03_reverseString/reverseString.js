const reverseString = function(string) {
    var reversedString = '';
    for (i = string.length - 1; i > -1; i--) {
        reversedString = (reversedString).concat(string[i]);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
