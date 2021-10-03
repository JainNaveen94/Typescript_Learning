/** Here we can see the Various Example of Other Special Typescript Types */

/** 
 * (@-@) ---- any Type ---- (@-@)
 * - Any Type is a Special Typescript Type which simply means that you can assigned any value to the varibale of type any.
 * - It is very much similar as that of JS normal Variable in which any value can be assigned.
 * - Any Type can be defined by using 'any' keyword as a type.
 * For Example : (Given Below)
 */
// Any Type Example
let anyTemp : any;
enum CoreType {
    NUMBER = "number",
    STRING = "string",
    BOOLEAN = "boolean",
    OTHER = "other"
}
const getAnyTypeDiffValues : (typeName: CoreType) => any = function(typeName: CoreType): any {
    if(typeName === CoreType.NUMBER) {
        anyTemp = 10;
    } else if(typeName === CoreType.STRING) {
        anyTemp = "Naveen";
    } else {
        anyTemp = true;
    }
    return anyTemp;
}

/**
 * (@-@) ---- Unknown Type ---- (@-@)
 * - Unkonwn Type is another speical Typescript Type which is a kind of restricted form of any type.
 * - In Unkonow Type everything is similar as that of any Type but restriction toward variable assignment is there.
 * - Unknow type can be defined by using 'unknown' keyword as a type
 * For Example : (Given Below)
 */

let unknownTemp : unknown;
unknownTemp = "Naveen";
let stringTemp: string;
/** 
 * Please Note :
 *  - It is not allowed by unknown Type even then also when we initilize the unknown type variable to string.
 *  - But it is allowed if we change the type from unknown to any of unknownTemp.
 */ 
// stringTemp = unknownTemp; // Not Allowed but will allowed through type check, i.e., shown below.
const getUnknownTypeDiffValue : (typeName: CoreType) => unknown = function(typeName: CoreType): unknown {
    if(typeName === CoreType.NUMBER) {
        unknownTemp = 10;
    } else if(typeName === CoreType.STRING) {
        unknownTemp = "Naveen";
    } else if(typeName === CoreType.BOOLEAN) {
        unknownTemp = true;
    } else {
        unknownTemp = stringTemp;
    }
    return unknownTemp;
}

/**
 * (@-@) ---- Union Type ---- (@-@)
 * - TypeScript allows us to use more than one data type to be used for a variable or a function parameter.
 * - This is called union type.
 * For Example : (Given Below)
 */

let unionTemp : (string | number);
const getUnionTempDiffValue : (typeName: CoreType) => void = function(typeName: CoreType) : void {
    let assignmentDoneFlag = false;
    if(typeName === CoreType.STRING) {
        unionTemp = "Naveen";
        assignmentDoneFlag = true;
    } else if(typeName === CoreType.NUMBER) {
        unionTemp = 8;
        assignmentDoneFlag = true;
    } else {
        // unionTemp = true; // Not Allowed as unionTemp either be string or number type due to union type not boolean one
        assignmentDoneFlag = false;
    }
    assignmentDoneFlag ? 
    console.log("TS Complilation Union Selected Value " + typeName + " : ", unionTemp) :
    console.log("TS Complilation No Value assigned in unionTemp due to passing Wrong Type Name");
}

/**
 * (@-@) ---- Literal Type ---- (@-@)
 * - Literal Type is more concrete sub-type of Typescript which allow values to be a data type itself.
 * - There are three sets of literal types available in TypeScript today: 
 *   strings, numbers, and booleans; 
 * - By using literal types you can allow an exact value which a string, number, or boolean to be a Type itself.
 */

/** Working Example of String Literal Type */
let performAddition : (n1: (number | string), n2: (number | string), resultType : "as-number" | "as-text") => (number | string);
performAddition = function(n1: (number | string), n2: (number | string), resultType : ("as-number" | "as-text")) : (number | string) {
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number') {
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    return resultType === 'as-number' ? +result : result.toString();
}

/** Working Example of Numeric Literal Type */
let rollDice : () => 1 | 2 | 3 | 4 | 5 | 6;
rollDice = function(): 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

/** Working Example of Boolean Literal Type */
// Currently no suitable example is there will update very soon



export {
    CoreType, 
    getAnyTypeDiffValues, 
    getUnknownTypeDiffValue, 
    getUnionTempDiffValue,
    performAddition,
    rollDice,
}