const user = {
    name: "Gerald",
    age: 21,
    class: 3
}

//destructuring
const {name, age} = user;

console.log(`My name is ${name}, I am ${age}`);

//spread
const techKeywords = ["React", "JavaScript", "API Integration"];
const softSkills = ["Communication", "Problem Solving"];

const allKeywords = [...techKeywords, ...softSkills, "leadership"]

console.log(allKeywords);