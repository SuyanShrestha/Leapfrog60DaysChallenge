// - Write a program to demonstrate callback function.

// EXAMPLE OS CALLBACK FUNCTION

// Main function
const mainFunction = (addFunc) => {
  setTimeout(() => {
    addFunc([2, 3, 4]);
  }, 2000);
};

// Add function
const add = (array) => {
  let sum = 0;
  for (let i of array) {
    sum += i;
  }
  console.log(sum);
};

// Calling main function
mainFunction(add);

// --------------------------------------------

// These are also callback functions
let numbers = [1, 2, 3, 4, 5];

// map method
let squares = numbers.map(function (number) {
  return number * number;
});
console.log(squares); // [1, 4, 9, 16, 25]

// filter method
let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// reduce method
let sum = numbers.reduce(function (total, number) {
  return total + number;
}, 0);
console.log(sum); // 15

// THese are also callback functions
setTimeout(function () {
  console.log("This message is shown after 2 seconds");
}, 2000);

setInterval(function () {
  console.log("This message is shown every 2 seconds");
}, 2000);

// --------------------------------------------
