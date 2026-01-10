//while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//do while
do {
    console.log(i)
    i++
} while (i < 5);

// for loop
// begin; condition; steo
for (let g = 0; g < 5; g++) {
    console.log(g);
}

//Normally a loop breaks when the condition becomes falsy
// but we can use the break keyword to break at anytime

for (let g = 0; g < 5; g++) {
    if(g === 2) break;
    console.log(g);
}

// the continue keyword stops the current iteration and
// makes the loop to start a new one

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skips the rest of the loop body for the current iteration
  }
  console.log(i);
}
// Output:
// 1
// 2
// 4
// 5

//The break <labelName> statement in the loop below breaks out to the label:
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');
//In the code above, break outer looks upwards for the label named outer and breaks out of that loop.
//So the control goes straight from (*) to alert('Done!')
