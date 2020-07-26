function add(n1: number, n2: number) {
	const result = n1 + n2;
	return result;
}

// Returning 'void' is not the same as 'undefined'.
function printResult(num: number): void {
	console.log(num);
	// An empty return gives return type of 'undefined', not 'void'.
	// return;
}

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
	const result = n1 + n2;
	callback(result);
}
// Param name does not matter in Function types.
let combineValues: (a: number, b: number) => number;
combineValues = add;
// Wrong function type.
// combineValues = printResult;

addAndHandle(10, 20, printResult)
// TS infers type of argument ('number') based on callback Function type defined in addAndHandle.
addAndHandle(10, 20, (result) => {
	printResult(result + 10)
	// Function type is 'void' in addAndHandle thus return value will not be used (ie, doesn't matter).
	return 'asdf'
})