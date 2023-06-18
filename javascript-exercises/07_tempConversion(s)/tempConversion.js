const convertToCelsius = function (temp) {
    let newTemp = Math.round((temp - 32) * (5 / 9) * 10) / 10;
    return newTemp;
};

const convertToFahrenheit = function (temp) {
    let newTemp = Math.round((temp * (9 / 5) + 32) * 10) / 10;
    return newTemp;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
