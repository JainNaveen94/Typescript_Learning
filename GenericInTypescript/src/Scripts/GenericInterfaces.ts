/** Here we will see Generic Interface */

/**
 * (@--@) ---- Generic Interface ---- (@--@)
 * - When Generic Behaviour is Used to Define the Interfaces then that interface is called the Generic Interface.
 */

/** Example one (#-#)  - Normal Generic Interface*/
// Generic Interface Defination
interface KeyValuePair<T, U> {
    key: T;
    value: U;
}
// Define Variable of Type KeyValuePair Generic Interface
let numKeyValuePair: KeyValuePair<number, number> = {key: 1, value: 1};
let stringKeyValuePair: KeyValuePair<string, string> = {key: "temp", value: "temper"};
let numStringKeyValuePair: KeyValuePair<number, string> = {key: 101, value: "Naveen"};


/** Example Second (#-#) - Generic Interface as Function Type */
interface TempFunctionInterface<T, U> {
    (key: T, value: U): void;       // Genreric Signature Method
}
// Function which is very much similar as that of TempFunctionInterface
function processKeyValuePair<T, U>(key: T, value: U) : void {
    console.log(`Process Key Value Pair where Key : ${key} & value : ${value}`);
}
// Let Define the variable as Functional Interface type
let keyValueProcessing: TempFunctionInterface<number, number> = processKeyValuePair;
let keyValueProcessing2: TempFunctionInterface<number, string> = processKeyValuePair;

function printInterfaceAsFunctionType(): void {
    keyValueProcessing(1, 20);
    keyValueProcessing2(21, "Naveen");
}

export {
    KeyValuePair,
    numKeyValuePair,
    stringKeyValuePair,
    numStringKeyValuePair,
    TempFunctionInterface,
    processKeyValuePair,
    printInterfaceAsFunctionType,
}