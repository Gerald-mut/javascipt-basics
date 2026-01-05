//filter
let Gerald = [1, 2, 3, 4, 5];
let evens = Gerald.filter(num => num % 2 == 0);

//map
let numerals = [1, 4, 9];
let squares = numerals.map(num => num * num);

//reduce
let numbers = [1, 2, 3, 4, 5];
let even = numbers.reduce((acc,curr) => {
    return acc + curr;
},0);
console.log(evens);

let cart = [
  { name: "Shirt", price: 15 },
  { name: "Shoes", price: 30 },
  { name: "Hat", price: 25 }
];


// Step 1: filter → keep only items > $20
 let over20 = cart.filter(item => item.price > 20);
 console.log(over20);
// Step 2: map → get just the prices
let prices = over20.map(item => item.price);
console.log(prices);
// Step 3: reduce → sum the prices
let total = prices.reduce((sum, price) => {
    return sum + price;
},0);

console.log(total);