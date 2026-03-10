function calculateTotal(cart) {
  let total = 0;
  for (let i = 0; i <= cart.length; i++) { // 🐛 Bug: <= should be 
    total += cart[i].price;
  }
  return total;
}

const cart = [
  { name: "Book", price: 12 },
  { name: "Pen", price: 3 }
];

console.log(calculateTotal(cart)); // TypeError: Cannot read properties of undefined