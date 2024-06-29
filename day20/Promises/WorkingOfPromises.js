// basic promise example

let promise = new Promise(function (resolve, reject) {
  const x = "suyan heroheeralal";
  const y = "suyan heroheeralal";
  if (x === y) {
    resolve("Hello heroheeralal sir");
  } else {
    reject("Ohno, imposter alert");
  }
});

promise.then((res) => console.log(res)).catch((err) => console.log(err));

// EXPLANATION OF PROMISES

// Here's what happens in Promises
// Created with promise constructor
// The promise constructor takes only one argument which is a callback function

// The callback function takes two arguments, resolve and reject
// If everything goes well, call resolve 
// If something doesnt go well, call reject

// 4 states : fulfilled, rejected, pending, settled
// Resolve and reject are functions provided by promise itself in JS
// The string or anything that is passed as argument in resolve and reject work as res or err in then and catch respectively.

// Here is how the code works 

// it checks whether x === y
// since it is true, it calls resolve with the argument "Hello heroheeralal sir"
// this argument is passed to the then function's callback's parameter as res
// then it logs res to the console
// if x!==y, then it calls reject with the argument "Ohno, imposter alert"
// this argument is passed to the catch function's callback's parameter as err


// ---------------------------------------------------


// promise chaining example
let promise2 = new Promise(function (resolve, reject) {
  const num1 = 7;
  if (num1 < 8) resolve(num1);
  else reject(`Error while handling ${num1}`);
});

promise2
  .then((res) => res + 1)
  .then((res) => res + 1)
  .then((res) => res + 1)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
// Output: 10

// EXPLANATION 
// Promise chain is a series of promises that are chained together, by stacking of then one over other
// Here, num1=7 is less than 8, so it gets resolved and data sent to line24 “then method’s” callback function’s res argument is num1=7
// Line24 would return 7+1=8, and this will be sent as value for res for line25.
// Again returned value of line25 will be sent to line26, and then line26’s returned value is sent to line27
// Special thing to note, is that after executing line24, it returns value that is not less than 8, which doesnt satisfy condition at line19, and line20. But this wont result in giving out error. Once promise has started to be resolved, the control flow wont come back to check condition again, but will just move forward with then.

// ---------------------------------------------------