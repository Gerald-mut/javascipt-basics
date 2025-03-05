// rest element will bundle seperate elements into an array (...rest)

function openFridge(...foods) {
    console.log(foods);
}

const food1 = "pizza";
const food2 = "fries";
const food3 = "ugali";

openFridge(food1, food2, food3);