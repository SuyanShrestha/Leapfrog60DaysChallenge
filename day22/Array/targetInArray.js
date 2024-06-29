// 3. Program that takes an array of numbers and a target number and returns true if the target number is in the array.

const targetInArray = (arr, target) => {
    return arr.includes(target);
}

console.log(targetInArray([1, 2, 3, 4, 5, 6], 3));
console.log(targetInArray([1, 2, 3, 4, 5, 6], 7));

// ----------------------------------------------------------

// EXPLANATION
// here, i used includes method to check if the target number is in the array
// includes method returns true if the target number is in the array, otherwise false {just boolean stuff}