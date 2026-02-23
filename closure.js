// function createCounter() {
//     let count = 0;

//     return function() {
//         count ++;
//         console.log(`Document downloaded ${count} times`);
//     }
// }
// const downloadCounter = createCounter();

// console.log(downloadCounter()); 
// console.log(downloadCounter()); 
// console.log(downloadCounter());

function createCounter() {
    let score = 0;
    return function() {
        score++;
        return score;
    };
}

const playerOne = createCounter();
const playerTwo = createCounter();

playerOne(); 
playerOne(); 
console.log(playerTwo());