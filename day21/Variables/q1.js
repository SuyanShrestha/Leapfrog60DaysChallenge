function test() {
  console.log(a);
  let a = 10;
  console.log(a);
}

var a = 20;
console.log(a);
test();

// EXPLANATION

// First of all, there is concept of hoisting to be understood, which moves all decalrations to the top
// since function is not called yet, so control moves to line 7, and declares 'a', while assigning it as undefined for the moment
// again function is also declared, which i will explain later
// again control checks from top, and moves to line 7, which assigns a to 20
// then control moves to line 8, and logs 'a', which is 20

// now, test() function will have a seperate execution context of its own
// if there was not initialization of 'a' variable again in the block scope of test() function, then it would have taken the value of 'a' from the global scope
// but since there is a declaration of 'a' in the block scope of test() function, so control moves to line 3, and declares 'a' in the block scope of test() function
// since we used let to decalre 'a', so it is in temporal dead zone until it gets initialized
// now in test(), control moves to line 2, and tries to log 'a', but it is still in temporal dead zone, so it throws a ReferenceError
// then control moves to line 3, and assigns 'a' with 10
// then control moves to line 4, and logs 'a', which is 10







