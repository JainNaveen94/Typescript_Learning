/** Here we will see Generic Function */

/**
 * (@--@) ---- Generic Function ---- (@--@)
 * - When Generic Behaviour is used with the Function Defination then that concept is called generic Function.
 */

// Generic Function Defination
export function getArray<T>(items : T[] ) : T[] {
    return new Array<T>().concat(items);
}
// Generic Function Creation
export let myNumArr = getArray<number>([100, 200, 300]);
export let myStrArr = getArray<string>(["Hello", "World"]);
// Perfrom Operations on Generic Function
myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK
// Perform Unwanted Operation on Generic Function
// myNumArr.push("Hi"); // Compiler Error
// myStrArr.push(500); // Compiler Error