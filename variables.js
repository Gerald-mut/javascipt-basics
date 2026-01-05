// NaN represents a computational error.
// It is the result of an incorrect or an undefined mathematical peration
alert( "not a number" / 2 ); // NaN, such division is erroneous

// NaN is sticky. Any further mathematical operation on NaN returns NaN:

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

// So, if there’s a NaN somewhere in a mathematical expression,
//  it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).

//A BigInt value is created by appending n to the end of an integer:

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

//Backticks

let namee = "John";

//embed a variable
alert(`Hello, ${namee}`);

//embed an expression
alert(`the result is ${1 + 2}`);

//null represents empty, nothing or value unkown
//undefined means value not assigned

// the typeof operator returns the type of the operand
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"