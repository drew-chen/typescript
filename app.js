// Not the same as 'any'.
var userInput;
var userName;
// The following assignments are allowed for 'unknown'.
userInput = 6;
userInput = 'Andrew';
// 'unknown' is not guaranteed to be 'string', so this is not allowed.
// userName = userInput;
// Using an explicit check for a string makes this ok, since it guarantees type.
if (typeof userInput === 'string') {
    userName = userInput;
}
var userInputAny;
userInputAny = 5;
// Assign userName, a 'string' type, to 5.
userName = userInputAny;
userName += 5;
// Gives 10! Unlike with 'unknown', there is no compilation error. 
// 'any' basically disables type checking and should be avoided.
console.log(userName);
// This function never produces a return value, not even 'void' or 'undefined.
// Note: compiler assumes 'void' due to backward compatibility, so be explicit and say 'never'.
function generateError(message, code) {
    // Always crashes so never returns.
    throw {
        message: message,
        errorCode: code
    };
}
function infiniteLoop() {
    while (true) { }
}
infiniteLoop();
generateError('An error occured!', 500);
