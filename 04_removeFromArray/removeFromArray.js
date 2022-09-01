const removeFromArray = function(...args) {
    var array = args[0];
    num = args.slice(1);

    for (i = 0; i < num.length; i++) {
        if (!array.includes(num[i])) {
            continue;
        } else {
            var newArray = array.splice(array.indexOf(num[i]), 1)
        }   
        }   
        return array;
    }
    

// Do not edit below this line
module.exports = removeFromArray;