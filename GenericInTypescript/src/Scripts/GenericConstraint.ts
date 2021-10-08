/** Here we will Few Examples of Generic Constraints Based on Different Different Situation*/

/**
 * (@-@) --- Situation 1 ---- (@-@)
 * - Suppose you try to call a in-build method which is specific to any type and not available for all the Types.
 *   Now when we use such type of methods in Generic Definations then it will throw a Compiler Error.
     So to Resolve this we need to Restricted Generic Defination to be specific to that type.
 */

// Generic Function having Type Constraint Issue
/**
     function getAndPrint<T>(element: T): [T, string] {
        let description = "No Data Exist in the Bucket";
        if(element.length === 1) {                       // It will throw Compiler error because we are not assure about length property of element
            description = "1 Data Exist In the Bucket";
        } else if(element.length >= 2) {                 // It will throw Compiler error because we are not assure about length property of element
            description = `${element.length} Data is Exist In the Bucket`;
        }
        return [element, description];
    }
    */
// Using the Define Generic Function
// console.log("Generic Constraint : ", getAndPrint(["Hello Hero !", "Don't Become Zero !"]));

/** (@-@) --- Above Problem Solution --- (@-@)
 * - So to Overcome this we have a workaround here using Generic Constraint
 * - We can define the Custom Type having length as a Property and extend it into that Generic Variable
 */
// Custome Type Defination
interface Lengthy {
  length: number;
}
// Generic Function having Type Constraint Implementation
function getAndPrint<T extends Lengthy>(element: T): [T, string] {
  let description = "No Data Exist in the Bucket";
  if (element.length === 1) {
    // It will throw Compiler error because we are not assure about length property of element
    description = "1 Data Exist In the Bucket";
  } else if (element.length >= 2) {
    // It will throw Compiler error because we are not assure about length property of element
    description = `${element.length} Data is Exist In the Bucket`;
  }
  return [element, description];
}
// Using the Define Generic Function
console.log(
  "Generic Constraint Example 1 : ",
  getAndPrint(["Hello Hero !", "Don't Become Zero !"])
);

/**
 * (@-@) --- Situation 2 ---- (@-@)
 * - The Same Above Situation come with the Object Type where we try to perfrom the Operation in Generic Defination,
     which is only possible with objects not with other type but when we perform it on other time then it will not 
     give error but opertion is not performed.
 */

/**
// Generic Function Type Defination
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// Using the Define Generic Function
merge({ name: "Naveen" }, { age: 30 }); // Result : {name: "Naveen", age: 30};
merge({ name: "Naveen" }, 30); // it will not through here but nothing is happened to objA : {name: "Naveen"}
*/

/** (@-@) --- Above Problem Solution --- (@-@) */
// Generic Function Type Defination
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// Using the Define Generic Function
merge({ name: "Naveen" }, { age: 30 }); // Result : {name: "Naveen", age: 30};
// merge({ name: "Naveen" }, 30); // it will through Comiler error and will notify user about right thing to do.

/**
 * (@-@) --- Situation 3 ---- (@-@)
 * - One more Situation here is that we try to access or perform other operation on the one type of object by assuming it to be a part of other type
     but it is not like that.
 */

// Generic Function Declaration
/**
function extractAndConvert<T, U>(Obj: T, key: U) {
  return obj[key]; // it will thrown error by compiler as it is not sure that key is a part of type obj.
}
// using the Defined Generic Function
extractAndConvert({}, "name"); // it will thrown error by compiler as name is not a part of Object.
*/

/** (@-@) --- Above Problem Solution --- (@-@) */
// Generic Function Type Defination
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}
// using the Defined Generic Function
extractAndConvert({ name: "Naveen" }, "name");

export { Lengthy, getAndPrint, merge, extractAndConvert};
