/** Here we can see how Type Aliases will be used to ease the Programing */

/**
 * (@-@) ---- Type Aliases ---- (@-@)
 * - Type aliases can be used to "create" your own types.
 * - By Own Types we Simply means that we can create our own types names or types library
 *   - over a other Core type names which are Already exist such as string, number (example --> Normal Type Aliases Example)
 *   - over a combination of other core types (through union) and named as one type. (example --> Combination Type Aliases Example)
 *   - over a Object type as well. (example --> Object Type Aliases Example)
 * - Type Aliases can be define by using "type" keyword followed by your type aliases name.
 */

/** Normal Type Aliases Example */
type StringAliases = string;
type NumberAliases = number;
type BooleanAliases = boolean;

/** Combination Type Aliases Example 
 * - To Understand it in a detail ways let take an Example 
 * - First Without Type Aliases
 * - Second With Type Aliases (Simplify the Code)
*/

// First Without Type Aliases
let performAdditionWithOutTypeAliases : (n1: (number | string), n2: (number | string), resultType : "as-number" | "as-text") => (number | string);
performAdditionWithOutTypeAliases = function(n1: (number | string), n2: (number | string), resultType : ("as-number" | "as-text")) : (number | string) {
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number') {
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    return resultType === 'as-number' ? +result : result.toString();
}

// Second With Type Aliases (Simplify the Code)
type StringNumberCombo = string | number;               // Example of Combination Type of String & Number
type ResultConversion = "as-number" | "as-text";        // Example of Combination Type of Literal Types
let performAdditionWithTypeAliases : (n1: StringNumberCombo, n2: StringNumberCombo, resultType : ResultConversion) => StringNumberCombo;
performAdditionWithTypeAliases = function(n1: StringNumberCombo, n2: StringNumberCombo, resultType : ResultConversion) : StringNumberCombo {
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number') {
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    return resultType === 'as-number' ? +result : result.toString();
}

/** Object Type Aliases Example 
 * - To Understand it in a detail ways let take an Example
 * - First Without Type Aliases
 * - Second With Type Aliases (Simplify the Code)
*/ 

// First Without Type Aliases
let isOlderWithoutAliases : (user: { name: string; age: number }, checkAge: number) => boolean;
isOlderWithoutAliases = function(user: { name: string; age: number }, checkAge: number) : boolean {
    return checkAge > user.age;
}

// Second With Type Aliases (Simplify the Code)
type User = { name: string; age: number };
let isOlderWithAliases : (user: User, checkAge: number) => boolean;
isOlderWithAliases = function(user: User, checkAge: number) : boolean {
    return checkAge > user.age;
}


export {
    performAdditionWithOutTypeAliases,
    performAdditionWithTypeAliases,
    isOlderWithoutAliases,
    isOlderWithAliases
}