// 5. Program that takes an array of numbers and returns the sum. (Use reduce)

const calculateSum = (arr) => {
  return arr.reduce((acc, num) => acc + num, 0);
};

console.log(calculateSum([1, 2, 3]));

// ----------------------------------------------------------

// EXPLANATION

// here, i didnot check datatype of elements like it stringsReversedInArray.js because it didnt feel much necessary
// but if i had to do checking, i would use every method to check if all elements are numbers or not, by using typeof

// now moving to main logic
