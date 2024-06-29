const reverseStringsInArray = (arr) => {
  if (!arr.every((item) => typeof item === "string")) {
    throw new Error("All elements in the array must be strings");
  }
  return arr.map((str) => str.split("").reverse().join(""));
};

console.log(reverseStringsInArray(["suyan", "shristi", "uwu"]));

// console.log(reverseStringsInArray(["suyan", "shristi", "uwu", 1])); // this will throw an error because 1 is not a string

// ----------------------------------------------------------

// EXPLANATION

// this function takes an array of strings as an argument

// might be unnecessary, but i checked passing non string to this function, which threw error
// so i used try catch block
// here, if while checking datatype of every element in the array is string or not, it throws an error demanding all elements must be strings

// now moving to main logic
// then it uses map method to iterate over each element of the array
// then for each element in map, i used split to further split that element into an array of characters
// then i used reverse method to reverse the array of characters for each element
// then i used join method to join the array of characters back into a string
// and finally returned the reversed string
