/** Here we can see How we can define return types in Function and also used function as a type to some variable */

/**
 * (@-@) ---- Function Return Types ---- (@-@)
 * - In Normal Javascript we don't need to define the return type of a function (JS Normal Function Example)
 *   because in javascript function can do anything either return something or just perform printing or normal services.
 * - But In Typescript we need to define the return type of a function for better code protection or security
 *   We have to define :
 *   - A Specific Type if Function is going to return something, such as type as string if return string etc (Return Function Example)
 *   - A Void Type if Function is just print something or perform any service without return something. (Void Type Function Example)
 */

/** JS Normal Function Example */
let normalJSReturnFunction = function(n1, n2) {
    console.log("JS Normal Return Based Addition : ", n1+n2);
    return n1+n2;
}
let normalJSVoidFunction = function(n1, n2) {
    console.log("JS Normal Void Based Addition : ", n1+n2);
}
/** Return Function Example */
let typescriptReturnFunction = function(n1: number, n2: number) : number {
    console.log("TS Return Addition Result : ", n1 + n2);
    return n1 + n2;  // If we comment it or doesn't return anything then function throws compilation error
    // return (n1+n2).toString(); // If we return wrong type then also compilation error occure
}
/** Void Type Function Example */
let typescriptVoidFunction = function(n1: number, n2: number) : void {
    // return n1 + n2; // Throws error
    console.log("TS Void Addition Result : ", n1 + n2);
}

/** (@-@) ---- Function Type ---- (@-@) 
 * - we also used function as a type of any variable
 *   such that after decalaring it only function can be assigned to that variable not any other value.
 * - Function type can be defined by using "Function" keyword
 * - Such above feaure is not available in Javascript
 * - For Ex: Function as Type ==> (Given Below (Normal JS Code && Typescript Code With Function as a Type)
 * 
 * - Please Note :
 *      - There is a one catch over here which is that only define Function as a type ]
 *        will allowed Variable to assigned any function to it without consider its return type and function parameters.
 *      - But just to be more specific about the function with its specified return type and parameter Values and their type,
 *        we can define the Function type in other way.
 *        For Ex : Function Type in Other Way
*/

/** Function as Type */
// Normal JS Code
let performAdditionJSCode;
function addition(n1, n2) {
    return n1+n2;
}
performAdditionJSCode = addition;
performAdditionJSCode = 10;         // It will not throw comilation error but will through run time error

// Typescript Code with Function as a Type
let performAdditionTSCode : Function;
performAdditionTSCode = function(n1: number, n2: number) : number {
    return n1 + n2;
};
// Now it will throw the Comilation error as performAdditionTSCode is Function Type so we can't assigned number Type
// performAdditionTSCode = 10;

/** Function Type in Other Way */

function multiplication(n1:number, n2:number) {
    return n1 * n2;
}
function concatinationString(str1:string, str2: string) {
    return str1 + str2;
}
// here we define Function type in other way in more specified manner
let perfromMultiplicationTSCode : (n1: number, n2: number) => number;

perfromMultiplicationTSCode = multiplication;
// perfromMultiplicationTSCode = concatinationString;  // It will throw an compliation error because of more specified Form of Function type
// performAdditionTSCode = concatinationString; // It will not thrown an error and execute properly as we define its type as genric function only


export {
    normalJSReturnFunction,
    normalJSVoidFunction,
    typescriptReturnFunction,
    typescriptVoidFunction,
    performAdditionJSCode,
    performAdditionTSCode,
    perfromMultiplicationTSCode,
}