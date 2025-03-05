//spread operator: allows an iterable such as an array or string to be expanded into separate elements

let myList = [1, 2, 3, 4, 5]

maxNo = Math.max(...myList)

console.log(maxNo)

function getAverage(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    };
    return result / numbers.length;
};

const total = getAverage(70, 30, 40, 60);
console.log(total);