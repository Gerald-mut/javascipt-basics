let fruits = ["apples", "bananas", "kiwi", "pears"];

//find the length of an array
alert(fruits[fruits.length - 1]);
//or
alert(fruits.at(-1));

alert(fruits.pop()) //pears will be popped
fruits.push("Oranges"); //Oranges will be added to the end of the array

fruits.shift();// Removes the first element apples
fruits.unshift("apples") //adds apple to the beginning of the array

//splice method in arrays
//It returns an array of remved elements
let subjects = ["Maths", "English", "Science"];
result = subjects.splice(1,1); //["English"]
alert(subjects); // ["Maths, Science"]

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0,3,"Let's", "dance");
alert(arr); // ["Let's", "dance", "right", "now"]

// Splice can also insert elements without removing one
// You just set deleteCount to 0
let arrr = ["I", "study", "Javascript"];
arr.splice(2,0,"complex", "language");
alert(arrr); // "I", "study", "complex", "language", "javascript";

let digits = [1, 2, 5];
//from index -1(one step from the end)
//delete 0 elements
// then insert 3 and 4
digits.splice(-1,0,3,4);
alert(digits); // [1, 2, 3, 4, 5]

//slice method
//arr.slice([start], [end])
//it returns a new array copying it from start to end not including end. End is exclusive
let name = ["T", "e", "s", "h"];
alert(namee.slice(1,3)); //e,s
alert(namee.slice(-2)); //s h


//map method
let country = ["Kenya", "Bali", "Tanzania", "South Africa"];
let result = country.map(item => item.length);

let names = ['Gerald', "Leone", "Mary", "Stacy"];
let results = names.map(name => name.length);

//forEach method
names.forEach((name) => {
    console.log(name);
});

const scores = [92, 87, 47];
scores.forEach((score, index) => {
    console..log(`Score #${index}: ${score}`);
});