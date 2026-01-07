//In string comparison javascript uses alphabetical order
// to see which is greater
// Example
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
// When comparing values of different types, JavaScript converts the values to numbers.
//an equality check == converts values to numbers
alert(0 == false); //true 
// A strict equality operator === checks the equality without type conversion.
alert(0 === false); //false

//undefined only equals null an returns false for any other comparisons
// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.