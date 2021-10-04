/**
 * (@-@) ---- Spread & Rest Operator ---- (@-@)
 */

/** Spread Operator */

// spread operator doing the concat job
let arr = [1,2,3];
let arr2 = [4,5];
arr = [...arr,...arr2];

// spread Operator doing the Copy job such that new array manipulation doesn't effect old array (normal copy just copy pointer reference instead of create new copy)
let strArr = ['a','b','c'];
let strArr2 = [...strArr];
strArr2.push('d'); //inserting an element at the end of arr2

// spread Operator Doing Expanding
let numArr = [10, 20, 30];
let numArr2 = [numArr, 40, 50];
let numArr3 = [...numArr2, 40, 50];

let resultedSpreadOperatorValue : Function = function() : void {
    console.log("Here Spread Operator Demo Start");
    console.log("Concat through Spread")
    console.log(arr);     // [ 1, 2, 3, 4, 5 ]
    console.log("Copy through Spread")
    console.log(strArr); // [ 'a', 'b', 'c' ]
    console.log(strArr2); // [ 'a', 'b', 'c', 'd' ]
    console.log("Expand through Spread")
    console.log("Array without expand : ", numArr);                 // [10, 20, 30]
    console.log("Array with expand without spread : ", numArr2);    // [[10, 20, 30], 40, 50]
    console.log("Array with expand with spread: ", numArr3);        // [10, 20, 30, 40, 50]
    console.log("Math Lib Function through Spread");
    let tempArr = [1,2,3,-1];
    // console.log("Min Math Function without Spread : ", Math.min(tempArr); // throw compilar error
    console.log("Min Math Function with Spread : ", Math.min(...tempArr));// -1
}

/** Rest Operator */

// Code Without Rest Operator
function fun1(n1, n2) {
  return n1 + n2;
}

let additionFunWithoutRestOperator = function (): void {
  console.log("Here Addition is performed without Rest Operator");
  console.log(fun1(1, 2)); //3
  // console.log(fun1(1, 2, 3)); // throw compilar error
  // console.log(fun1(1, 2, 3, 4, 5)); // throw compilar error
};

// Code With Rest Operator
function fun2(...input: number[]) {
  let sum = 0;
  for (let i of input) {
    sum += i;
  }
  return sum;
}

let additionFunWithRestOperator = function (): void {
  console.log("Here Addition is performed with Rest Operator");
  console.log(fun2(1, 2)); //3
  console.log(fun2(1, 2, 3)); //6
  console.log(fun2(1, 2, 3, 4, 5)); //15
};

export {
    resultedSpreadOperatorValue,
    additionFunWithoutRestOperator,
    additionFunWithRestOperator
}
