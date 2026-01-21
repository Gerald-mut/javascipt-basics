let userr = new Object(); // Object constructor syntax
let user = {
    name: "Gerald",
    age: 21,
    "like birds": true, // Multi word property name must be quoted
}; // Object literal syntax

alert(user.name);
//value can be of any type
user.Isadmin = true;
// delete a property
delete user.age;

// Computed properties
let fruit = prompt("Which fruit do you want to buy?", "apple");
let bag = {
    [fruit]: 5,
};
alert(bag.apple); // 5 if fruit="apple"

//How to check if a property exists
alert(user.noSuchProperty === undefined); // true means no such property
// We can also use in
alert("name" in user); //true

let student = {
    name: "Gerald",
    age: 21,
    class: "BCS",
};

for(let key in user) {
    alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

// in object integer properties are sorted other types return in order of creation