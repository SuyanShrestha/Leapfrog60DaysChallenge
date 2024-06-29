// 2. Program that takes an object and returns the number of properties the object has.

const getNumberOfProps = (obj) => {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count;
};

let object = { a: 1, b: 2, c: 3, d: 4 };
console.log(getNumberOfProps(object));


// ----------------------------------------------------------

// EXPLANATION

// here, i used for in loop to get all keys of object
// then for each iteration i just incremented the count