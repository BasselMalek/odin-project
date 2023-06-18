const repeatString = function (stringToBeRepeated, repeats) {
    let result = "";
    if (repeats < 0) {
        return "ERROR";
    }
    for (let i = 0; i < repeats; i++) {
        result += stringToBeRepeated;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
