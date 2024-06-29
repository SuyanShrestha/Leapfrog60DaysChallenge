// 6. Program that takes an array of numbers and returns the maximum value. (Use reduce)

const findMax = (arr) => {
    return arr.reduce((acc, curr) => acc > curr ? acc : curr, 0);
}

console.log(findMax([1, 2, 6, 3, 4, 5])); 

// ----------------------------------------------------

// EXPLANATION
// here 0 is also passed as argument, so initial accumulator will be zero, and first currentValue will be first element
// then using ternary operator, if acc is larger true, then acc is returned, otherwise curr is returned
// then returned value i.e. the max wala element will be accumulator
// then this process will be repeated for all elements in array