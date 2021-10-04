// Javascript Array Declaration
/**
 * In Javascript Array can be declare by initializing it with Value 
 * And By Array Class
 */
// Declare using Value Initilization
let arr = [1, 2, "Apple", "Mango", true, 4, false, "Onion"];
// Declare using Array Class
let arrTemp = new Array();
arrTemp.push(1);
arrTemp.push(2);
arrTemp.push("Apple");
arrTemp.push("Mango");
arrTemp.push(true);
arrTemp.push(4);
arrTemp.push(false);
arrTemp.push("Onion");

// Typescript Array Declaration
/**
 * In Typescript Array can be declare by specify it to be Array of Specific type or any type
 * and also by using class with Genric Type 
 */
// Declare Using Specify Type
let tempArr : string[];
tempArr = ["Apple", "Mango", "Onion"];
// Declare using Array Class with Genric Type
let tempAr : Array<number> = [1,2,4];
// Declare using Any Type
let tempArray : any[] = [1, 2, "Apple", "Mango", true, 4, false, "Onion"];
let tempAray : Array<any> = [1, 2, "Apple", "Mango", true, 4, false, "Onion"];

/**
 * We also have an Option in Typescript to Declare array of multiple type using a special symbol "|"
 */
let tempMultiArray : (string | number | boolean)[] = [1, 2, "Apple", "Mango", true, 4, false, "Onion"];
let tempMultiAry : Array<string | number | boolean | {name: string, age: number}>;
tempMultiAry = [1, 2, "Apple", "Mango", true, 4, false, "Onion", {name: 'naveen', age: 27}];


export {arr, arrTemp, tempArr, tempAr, tempArray,tempAray, tempMultiArray, tempMultiAry};
