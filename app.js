function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return result;
    }
}
var num1 = 5;
var num2 = 9;
var showResult = true;
var resultPhrase = 'Result is: ';
add(num1, num2, showResult, resultPhrase);
