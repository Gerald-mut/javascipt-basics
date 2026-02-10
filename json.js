// JSON is just a strnig of text
// JSON.parse converts json string to javascript object
//json.stringify() converts js object and converts it to a json string

const userCV = {
    firstName: "Gerald",
    age: 21,
    skills: ["Javascript", "HTML", "CSS"],
    isEmployed: true,
    address: {
        city: "Nairobi",
        zip: "00100"
    }
};

console.log(userCV);
//convert js object to json string
const jsonObj = json.stringify(userCV);
console.log(jsonObj);
//convert json string to js object
const parsedObj = json.parse(jsonObj);
console.log(parsedObj)