const removeFromArray = function (object, ...toRemoves) {
    let removesArray = toRemoves;
    removesArray.forEach((element) => {
        let i = object.findIndex((thing) => thing === element);
        if (i != -1) {
            object.splice(i, 1);
        }
    });
    return object;
};
console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;
