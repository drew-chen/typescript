/** The Typescript Compiler and Configuration. */

// 'tsc app.ts --watch' Auto recompiles that file.
const str =  'sd'
// str = 2
console.log("both app.js and analytics.js are running.")
/*
'tsc --init' initializes typescript project directory.
just use 'tsc' to compile all .ts files in the project.
'tsc -w' to watch all TS files.
*/
console.log("functions.js is not throwing an error since excluded.")
// node_modules directory is automatically excluded if "excluded" is not configured.

function clickHandler(message: string) {
	console.log('Clicked! ' + message)
}
/*
'!' mark tells TS that this button will exist.
Don't check by setting "strictNullChecks": false.
Another solution without using '!' is a runtime null check with an if statement.
Typescript knows the existence of 'document' because of the default configured lib.
*/
const button = document.querySelector('button')!;
/*
"strictBindCallApply": false, allows 'this' to be null and message to be
unassigned. If this option is true, a second paramter (string) needs to be used.
*/
button.addEventListener('click', clickHandler.bind(null, 'asd'));


/*
Source map setting allows TS files to be viewed and debugged in browser console.
Debugging can be done in VS code with extensions.


"noImplicitAny": true, disallows implicit 'any' here.
i.e, type must be explicit here.
*/
function sendAnalytics(data: string){
	console.log(data);
}
/*
For variables, implicit 'any' is ok, but not for parameters.
Functions are defined before being called, so cannot infer (statically).
*/
sendAnalytics('Sending requests...');

/*
Additional checks configurations checks for code quality errors.
These errors stop compilation like other errors.

Typescript doesn't warn when a global variable is unused since
it can be used in other scripts. With basic checks on true, TS does warn 
about unused local variables and parameters.
*/
const globalStr = 'a global str';

// "noImplicitReturns" returns is another optional check.
// function implicitReturn(number: number) {
// 	let unused = '4'
// 	if (number > 0) {
// 		return number
// 	}
// }
