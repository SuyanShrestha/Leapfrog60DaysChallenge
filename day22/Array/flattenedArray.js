// 7. Program to take an array of arrays and return a single flattened array. (Use reduce)


const getFlatternedArray = (arr) => {
    return arr.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(getFlatternedArray([[1, 2, 3], [4, 5], [6, 7, 8, 9]]));

// ----------------------------------------------------

// EXPLANATION
// here empty array is passed as argument, so initial accumulator will be empty array, and first currentValue will be first element
// then using concat method, first element is concatenated to empty array
// then this process will be repeated for all elements in array