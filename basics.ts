function add(n1: number, n2: number, showResult: boolean, phrase: string) {
	const result = n1 + n2;
	if (showResult) {
		console.log(resultPhrase + result);
	} else {
		return result
	}
}

let num1: number;
num1 = 5;
const num2 = 9;
const showResult = true;
const resultPhrase = 'Result is: '

add(num1, num2, showResult, resultPhrase);
 