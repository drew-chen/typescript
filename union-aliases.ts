type Combinable = number | string
type ConversionDescriptor = 'num' | 'str'

function combine(
  input1: Combinable,
  input2: Combinable,
  resultType: ConversionDescriptor
) {
  let result;
  if (
	(typeof input1 === "number" && typeof input2 === "number")
	|| resultType === 'num'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result
}

const combinedAges = combine(20, 50, 'num');
console.log("num", combinedAges);

const combinedAgesString = combine('20', '50', 'num');
console.log("num", combinedAgesString);

const combinedNames = combine("John", "Fish", 'str');
console.log("str", combinedNames);
