// 1. Program to take 2 arrays and returns a new array with all the values of both.

const valuesOfBoth = (arr1, arr2) => {
    return arr1.concat(arr2);
}

console.log(valuesOfBoth([1, 2, 3], [4, 5, 6]));

// ----------------------------------------------------------

// EXPLANATION
// here, i used concat method to concatenate the elements of arr1 and arr2 and return a new array with all the values of both arrays
// concat method does not change the existing arrays, but instead returns a new array
// so, arr1 is safe too