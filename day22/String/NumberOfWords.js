// 2. Program that takes in a string sentence and returns the number of words in it.

const numberOfWords = (str) => {
    return str.split(' ').length;
}

console.log(numberOfWords('ma ho suyan heroheeralal'));

// EXPLANATION
// split has delimiter space ' ' which splits the string into an array of words.
// then we can use length method to get number of elements in array.