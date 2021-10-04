/**
 * (@-@) ---- Arrow Function ---- (@-@)
 */

/** Normal Arrow Function */

let additionArrowFunction = (n1: number, n2: number) => { return n1 + n2; };

/** Inline Code Arrow Function */

let addArrowInlineFunctio = (n1: number, n2: number) => n1+n2; 

/** Arrow Function as Parameter or callback */

let resultArrowFunctionAsParameter = [1, 2, 3, 4, 5].forEach(item => console.log(item));

export {
    additionArrowFunction,
    addArrowInlineFunctio,
    resultArrowFunctionAsParameter
}