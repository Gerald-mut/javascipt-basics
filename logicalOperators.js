// || (or) chooses the first truthy value for example
let firstName = "";
let lastName = "";
let nickName = "Tesh";

alert(firstName || lastName || nickName || "anonymous"); 
// will output nickName otherwise would output Anonymours

//The AND && operator does the following:

//Evaluates operands from left to right.
//For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
//If all operands have been evaluated (i.e. all were truthy), returns the last operand.
// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

// ! (not) converts the operand then returns the inverse value 
//example
alert(!true); //false
alert(!0); //true
alert(!"") //true

//A double NOT !! is sometimes used for converting a value to boolean type:

alert( !!"non-empty string" ); // true
alert( !!null ); // false
//we can also use the keyword Boolean for converting to boolean
alert(Boolean("non-empty string")); //true
alert(Boolean(null)); //false