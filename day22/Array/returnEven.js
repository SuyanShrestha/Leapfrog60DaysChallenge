// 2. Program that takes in an array of numbers and returns an array with only the even numbers.

const returnEven = (arr) => {
    return arr.filter(num => num % 2 === 0);
}

console.log(returnEven([1, 2, 3, 4, 5, 6]));

// EXPLANATION
// here, i used filter method to filter out elements from arr, where nums that will be divisible by 2 will only be included in returned array
// filter method does not change the existing array, but instead returns a new array