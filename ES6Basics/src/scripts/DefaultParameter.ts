/**
 * (@-@) ---- Default Parameter ---- (@-@)
 */

/** Example 1 -- Default Param Defined at last params of function */
let addition= (n1: number, n2: number = 20, n3: number = 40) => { return n1 + n2 + n3; };
let resultWithDefaultParamAtLast = () => console.log("Result With Default Param as last", addition(200));

/** Example 2 -- Default Param Not Defined at last params of function */
let add = (n1: number = 20, n2: number) => { return n1 + n2; };
// let resultWithDefaultParamAtFirst = () => console.log("Result With Default Param as first", add(200));   // throw compile error
let resultWithDefaultParamAtFirst = () => console.log("Result With Default Param as first", add(200, 400)); // Here no purpose of default params if defines it as first

export {
    resultWithDefaultParamAtLast,
    resultWithDefaultParamAtFirst
}