const sumAll = function (start, end) {
    let result = 0;
    if (
        typeof start == "number" &&
        typeof end == "number" &&
        start >= 0 &&
        end >= 0
    ) {
        if (start > end) {
            let temp = start;
            start = end;
            end = temp;
        }
        for (let i = start; i <= end; i++) {
            result += i;
        }
    } else {
        return "ERROR";
    }
    return result;
};
console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
