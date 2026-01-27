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
    alert( key );  // name, age, class
  // values for the keys
  alert( user[key] ); // Gerald, 21, BCS
}

// in object integer properties are sorted other types return in order of creation

// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
//two objects are equal only if they are the same object
let a = {};
let b = a;
alert(a == b); // true
alert(a === b); // true
//but
let c = {};
alert(a == c); // false
alert(a === c); // false

// const objects can be modified
const user  = {
    name: "John"
};
user.name = "Pete";
alert(user.name); //Pete
// The value of user is constant, it must always reference the same object, but properties of that object are free to change.

//how to duplicate an object
let user = {
    name: "John",
    age: 30
}
let clone = {} //the new empty object

//copy all the user properties into clone
for (let key in user) {
    clone[key] = user[key];
}

//copies all properties of user into the empty object and returns it
let clonee = Object.assign({}, user)

//Object.assign
let user = { name: "John"};
let permissions1 = { canView: true};
let permissions2 = { canEdit: true};
//copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

//stuctured clone
//Clones objects with nested properties
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let cloneee = structuredClone(user);

alert( user.sizes === cloneee.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(cloneee.sizes.width); // 50, not related


//Garbage collection
//An object is stored in memory if its reachable otherwise garbage collector will junk the data and free the memory

//this keyword
//used when a method needs to access information stored in an object
let customer = {
    firstName: "John",
    lastName: "Mut",

    sayHi () {
        console.log(this.firstName);
    }
}

customer.sayHi(); // John