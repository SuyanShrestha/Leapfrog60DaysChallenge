//3. Program that takes a string and 2 indices and returns the substring betwen those indices.

const getSubstring = (str, start, end) => {
    return str.slice(start, end+1);
};

console.log(getSubstring('suyanshrestha uwu', 1, 3)); 


// EXPLANATION
// this function takes a string, start index and end index as arguments
// then it uses slice method to return the substring between those indices
// the start index will be inclusive, whereas the end index will be exclusive
// so i added 1 to the end index to make the end inclusive