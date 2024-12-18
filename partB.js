//Task 1
const fruits = ["apple", "blueberries", "mango", "kiwi", "watermelon"];

console.log(fruits);

//Task 2
console.log("first fruit:", fruits[0]);
console.log("last fruit:", fruits[fruits.length - 1]);
console.log("third fruit:", fruits[2]);

//Task 3
fruits.push("melon");
fruits.unshift("pear");
fruits.pop();
console.log(fruits);

//Task 4
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let element of fruits) {
  console.log(element);
}

//Task 5
console.log(fruits.length);

//Task 6
function isInArray(array, element) {
  return array.includes(element);
}

console.log(isInArray(fruits, "kiwi"));

//Task 7
fruits.sort();
console.log(fruits);

//Task 8
fruits.reverse();
console.log(fruits);

//Task 9

const numbers = Array.from(
  { length: 10 },
  () => Math.floor(Math.random() * 100) + 1
);

console.log(numbers);

function filterEvenNumbers(array) {
  const filteredArray = array.filter((element) => element % 2 == 0);
  return filteredArray;
}

console.log(filterEvenNumbers(numbers));

//Task 10

const vegetables = ["Tomato", "cucumber", "bell pepper"];
const groceries = fruits.concat(vegetables);

// console.log(groceries);
