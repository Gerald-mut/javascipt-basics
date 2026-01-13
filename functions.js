// We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:

function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
// Now if the text parameter is not passed, it will get the value "no text given".

// you can return without a value. That causes the function to exit immediately
// an empty return is the same as return undefined

function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

//if we put parentheses after sayHi() then it would copy the result of that function to func
// Instead of copying the actual function itself

//function declaration
function sum(a, b) {
  return a + b;
}

//function expression
let sum = function(a, b) {
  return a + b;
}


//when js starts to run it looks for global function declarations in it and creates the functions
// thus you can call a declared function anywhere and  anytime in the script
//in function expressions the function is created and used once the execution flow reaches it

// function declarations are block scoped
// function expressions are not block scoped

// Arrow functions
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};*/

// If we have one argument we can do
let double = n => n * 2;

// If there are no arguments
let sayHi = () => alert("Hello!");

sayHi();

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);