const reverseString = function (toReverse) {
    let result = "";
    for (let i = toReverse.length - 1; i >= 0; i--) {
        const element = toReverse[i];
        result += element;
    }
    console.log(result);
    return result;
};
reverseString("aaliyah");
// Do not edit below this line
module.exports = reverseString;
