/**
 * TypeScript introduced a new data type called Tuple. Tuple can contain two or more then two fixed values of different data types.
 * For Example : Given Below (Example of Basic Tuple)
 * We also have a Feature to declare a array of tuple same as array of normal types. (Example given below -> Array of Tuple)
 * Tuple can be Accessed Simply like array using indexes. (Example Given Below -> Access Tuple Using Indexes)
 * We can pushed the elements in tuple using push method but push can only be work with the data types specified at the time of declaration.
 * For Example : (Add Element in Tuple)
 * Tuple is very much similar as that of array and we can also use array prototypes or methods on tuple as well.
 * For Example : (Array Methods on Tuple)
 */

// Basic Tuple Examples
let tempTuple: [number, string] = [101, "Naveen"];
let tempTuples: [number, string, boolean] = [101, "Naveen", true];
let tempTup: [number, string, boolean, number, string] = [
  101,
  "Naveen",
  true,
  27,
  "Delhi",
];

// Array of Tuple Example
let tupleArray: [number, string][] = [
  [101, "Naveen"],
  [102, "Shub"],
  [103, "Rohit"],
  [104, "Amogh"],
];

// Access Tuple Using Indexes
let accessTempTuple = function (idx: number) {
  return tempTuple[idx];
};

// Add Element in Tuple
let pushInTempTuple = function () {
  tempTuple.push(102, "Shub");
  tempTuple.push(103);
  //  tempTuple.push(true); // Not Allowed as boolean is wrong type here
};

// Array Methods on Tuple
let concatTempTupleElement = function(value: string) {
    tempTuple[1] = tempTuple[1].concat(" " + value);
}

export {tempTuple, tempTuples, tempTup, tupleArray, accessTempTuple, pushInTempTuple, concatTempTupleElement};
