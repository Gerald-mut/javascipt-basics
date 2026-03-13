const user = {
    name: "Gerald",
    age: 21,
    class: 3
}

//destructuring enables you to unack vales from arrays or properties from objects
const {name, age} = user;

console.log(`My name is ${name}, I am ${age}`);

//Rest Pattern: Use the rest operator (...) to gather the remaining elements into a new array. It must be the last element in the pattern.
const numbers = [10, 20, 30, 40, 50, 60, 70];
const [a, b, ...rest] = numbers;
console.log(a);    // 10
console.log(rest); // [30, 40, 50, 60, 70]

//spread
const techKeywords = ["React", "JavaScript", "API Integration"];
const softSkills = ["Communication", "Problem Solving"];

const allKeywords = [...techKeywords, ...softSkills, "leadership"]

console.log(allKeywords);