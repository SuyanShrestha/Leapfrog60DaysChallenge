// 1. Program to take 2 objects and merge their keys and values.

const mergeObjects = (obj1, obj2) => {
    Object.assign(obj1, obj2);
    return obj1;
}

let object1 = {a: 1, b: 2};
let object2 = {c: 3, d: 4, a: 2};

console.log(mergeObjects(object1, object2));

// ----------------------------------------------------------

// EXPLANATION

// Object.assign will take target as first and source and second argument.
// if same keys exist in both target and source, the value in target will be overwritten by value in source
// in this case, object1 is target and object2 is source
// object1 will be modified and returned with merged keys and values from object2

// we can also pass more objects as more arguments to merge them all into target object