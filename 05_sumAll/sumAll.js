const sumAll = function(num1, num2) {
    var counter = 0;

    if ((typeof(num1) != "number") || (typeof(num2) != "number")) {
        return "ERROR";
    } else if (num1 > num2) {
        for (i = num1; i > num2 - 1; i--) {
            counter = counter + i;
        }
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else {
        for (i = num1; i < num2 + 1; i++) {
        counter = counter + i;
        }
    }
return counter; 
};
    
    
    

// Do not edit below this line
module.exports = sumAll;