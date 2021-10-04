/** Here we can see Never Type and compair it with Void Type */

/**
 * (@-@) ---- Never Type ---- (@-@)
 * - TypeScript introduced a new type never, which indicates the values that will never occur.
 * - Never Type can be defined by using never keyword.
 * - The never type is used, when you are sure that something is never going to occur.
 *   For example, you write a function which will not return to its end point or always throws an exception
 */
// Function which always throws an exception
let generateError: (errorMsg: string, code: number) => never;
generateError = function (errorMsg: string, code: number): never {
  throw { errorMsg, code };
};
// Function which will not return to its end point
let keepProcessing: () => never;
keepProcessing = function(): never {
  while (true) {
    console.log("I always does something and never ends.");
  }
}

/**
 * (@-@) ---- Never Vs Void Type ---- (@-@)
 * - The void type can have undefined or null as a value where as never cannot have any value.
 * - In TypeScript, a function that does not return a value, actually returns undefined
 */

// 
let sayHi : () => void = function(): void { 
    console.log('Hi!')
}
let speech: void = sayHi();
console.log(speech); // undefined

export {
    generateError,
    keepProcessing,
    speech
}