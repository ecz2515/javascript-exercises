const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    } else {
        var repeatedString = '';
        for (i = 0; i < num; i++) {
        repeatedString = repeatedString.concat(string);
    }
    return repeatedString;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
