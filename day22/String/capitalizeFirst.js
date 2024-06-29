// 1. Program to take a string as an input and capitalize the frist letter.

const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(capitalizeFirst('ma ho suyan heroheeralal')); 

// EXPLANATION
// charAt(0) returns the first character of the string.
// toUpperCase() converts the character to uppercase.
// slice(1) returns the rest of the string except the first character.