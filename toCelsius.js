function toCelsius(farenheit) {
    return (5/9) * (farenheit - 32)
}

// let myFunction = function(a,b) {return a * b}
let myFunction = (a,b) => a * b;
console.log(myFunction(2,3))


const Person = {
    fullDetails: function() {
        return this.fname + " " + this.lname + " " + this.age;
    }
};

const Person1 = {
    fname: "Gerald",
    lname: "Muteru",
    age: 21
}

const Person2 = {
    fname: "Len",
    lname: "Gaya",
    age: 30,
}

console.log(Person.fullDetails.call(Person2))