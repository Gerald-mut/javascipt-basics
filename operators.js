//  if the operand is not a number, the unary plus converts it into a number.
// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

//postfix and prefix of the increment/decrement operator
//when we use the postfix operator it returns the 
//original value of the operand first and then increments
// or decrements the value stored in the variable

let i = 5
let j = i++
console.log(i) // will return 6 (i was incremented after the assignment)
console.log(j) // will return 5(j received the original value of i)

// The prefix operator increments or decrements the value
//  stored in the variable first, and then returns the new (modified) value as the result of the expression. 

let a = 5;
let b = ++a; 

console.log(a); // 6 (a was incremented *before* the assignment)
console.log(b); // 6 (b received the new value of a)

// The difference only matters when the result of the operation is used immediately in a larger expression (like an assignment, a function argument, or a condition in a loop

//In short postfix rturns the original value of the operan dfirst the in modifies it 
// prefix returns the modified value first 

// If the result of increment/decrement is not used, there is no difference in which form to use:

let counter = 0;
counter++;
++counter;
alert( counter ); // 2, the lines above did the same

// Summary of this in the prefix/postfix youll only see the
// difference when the value is assigned to a new variable
//example
let g = 1;
//when we do alert(g++) or alert(++g) the output will be 2
// but when we do x = g++ or x = ++g and alert(x) the output will change