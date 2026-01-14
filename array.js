let fruits = ["apples", "bananas", "kiwi", "pears"];

//find the length of an array
alert(fruits[fruits.length - 1]);
//or
alert(fruits.at(-1));

alert(fruits.pop()) //pears will be popped
fruits.push("Oranges"); //Oranges will be added to the end of the array

fruits.shift();// Removes the first element apples
fruits.unshift("apples") //adds apple to the beginning of the array