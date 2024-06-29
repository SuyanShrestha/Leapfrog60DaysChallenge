// - Write a program to print all the keys of given object.

const printKeys = (obj) => {
    for(let key in obj){
        console.log(key);
    }
}

printKeys({a: 1, b: 2, c: 3, d: 4, e: 5});

// ----------------------------------------------------------

// EXPLANATION
// here, i used for in loop to print all keys of object
// for in loop has been used to iterate through all keys of object