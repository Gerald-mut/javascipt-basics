const person = {
    fname : "Gerald",
    lname : "Wangome",
   
};

person.nationality = "Kenyan";

let myString = JSON.stringify(person);

document.getElementById("page").innerHTML = myString;
