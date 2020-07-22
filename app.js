function combine(input1, input2, resultType) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number")
        || resultType === 'num') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(20, 50, 'num');
console.log("num", combinedAges);
var combinedAgesString = combine('20', '50', 'num');
console.log("num", combinedAgesString);
var combinedNames = combine("John", "Fish", 'str');
console.log("str", combinedNames);
