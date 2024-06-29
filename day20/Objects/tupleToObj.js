// 3. Program that takes an array of key value tuple pairs and returns an object from those pairs.

const getTupleToObject = (arr) => {
    let obj = {};

    // so we can do like this without inbuilt functions too
    // for (let i=0 ; i<arr.length ; i++){
    //     obj[arr[i][0]] = arr[i][1];
    // }

    // but lets use OBject.fromEntries
    obj = Object.fromEntries(arr);
    return obj;
}

let arrayOfTuples = [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]];

console.log(getTupleToObject(arrayOfTuples));

// ----------------------------------------------------------

// EXPLANATION  
// since there are no tuples in js, i used mini arrays inside a big array, where each miniarray will have 2 elements, that will later represent keys and values.
// first of all i defined an empty object
// then i applied a for loop for all elements of array
// then for each element (tuple with 2 elements), i used line 6, to make them key and value