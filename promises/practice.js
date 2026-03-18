console.log("Script starts");

const fetchUser = new Promise((resolve, reject) => {
    console.log("Promise started");
    setTimeout(() => {
        resolve({ username: "CodeLearner2026", id: 42 });
    }, 1500); // gives a 1.5s delay
})

fetchUser.then((user) => {
    console.log("User received:", user.username.toUpperCase());
});

console.log("End of script");


const getNumber = new Promise((resolve) => {
    setTimeout(() => resolve(10), 1000);
});

getNumber.then((num) => {
    console.log("First step got:", num);
    return num * 2;
})
.then((doubleNum) => {
    console.log("Second step got:", doubleNum);
    return doubleNum + 5; //Pass 25 to the next step
})
.then((finalNum) => {
    console.log("Final reulst:", finalNum);
});