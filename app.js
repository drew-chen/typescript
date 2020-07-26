function add(n1, n2) {
    var result = n1 + n2;
    return result;
}
function printResult(num) {
    console.log(num);
    // return; This gives return type of undefined, not void.
}
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
var combineValues; // Param name does not matter.
combineValues = add;
// combineValues = printResult; // Wrong function type.
addAndHandle(10, 20, printResult);
addAndHandle(10, 20, function (result) {
    printResult(result + 10);
});
